module Jekyll
  module BibParser
    def self.load_bibliography(site)
      bib_file = File.join(site.source, 'references.bib')
      site.data['bibliography'] = {}
      
      if File.exist?(bib_file)
        begin
          content = File.read(bib_file)
          entries = parse_bibtex(content)
          entries.each do |key, entry|
            site.data['bibliography'][key] = entry
          end
        rescue => e
          Jekyll.logger.error "BibTeX Error:", "Could not parse #{bib_file}: #{e.message}"
        end
      else
        Jekyll.logger.warn "BibTeX Warning:", "Bibliography file not found: #{bib_file}"
      end
    end

    def self.parse_bibtex(content)
      entries = {}
      current_entry = nil
      current_key = nil
      field_content = ""
      in_field = false
      field_name = ""
      brace_count = 0

      content.each_line do |line|
        line = line.strip
        next if line.empty? || line.start_with?('%')

        # Start of new entry
        if line.match(/^@(\w+)\s*\{\s*([^,\s]+)\s*,?\s*$/)
          if current_entry
            entries[current_key] = current_entry
          end
          
          current_key = $2
          current_entry = {
            'type' => $1.downcase,
            'authors' => '',
            'title' => '',
            'year' => '',
            'venue' => '',
            'url' => '',
            'doi' => ''
          }
          next
        end

        # Field assignment
        if current_entry && line.match(/^\s*(\w+)\s*=\s*(.*)$/)
          field_name = $1.downcase
          field_value = $2
          
          # Handle multi-line fields with braces
          if field_value.include?('{')
            brace_count = field_value.count('{') - field_value.count('}')
            if brace_count <= 0
              # Single line field
              current_entry[field_name] = clean_field_value(field_value)
            else
              # Multi-line field starts
              in_field = true
              field_content = field_value
            end
          else
            current_entry[field_name] = clean_field_value(field_value)
          end
          next
        end

        # Continuation of multi-line field
        if in_field && current_entry
          field_content += " " + line
          brace_count += line.count('{') - line.count('}')
          
          if brace_count <= 0
            current_entry[field_name] = clean_field_value(field_content)
            in_field = false
            field_content = ""
          end
        end
      end

      # Add last entry
      if current_entry && current_key
        entries[current_key] = current_entry
      end

      # Post-process entries
      entries.each do |key, entry|
        entry['authors'] = format_authors(entry['author'] || '')
        entry['title'] = entry['title'] || ''
        entry['venue'] = get_venue(entry)
        entry['year'] = entry['year'] || ''
        entry['url'] = entry['url'] || ''
      end

      entries
    end

    def self.clean_field_value(value)
      # Remove braces, quotes, and trailing commas
      cleaned = value.gsub(/^\s*["{]\s*/, '').gsub(/\s*["}],?\s*$/, '').strip
      # Handle LaTeX escape sequences
      cleaned.gsub(/\\&/, '&').gsub(/\\%/, '%').gsub(/\\_/, '_').gsub(/\\\$/, '$')
    end

    def self.format_authors(authors)
      return "" if authors.empty?
      
      author_list = authors.split(' and ').map(&:strip)
      case author_list.length
      when 0
        ""
      when 1
        author_list[0]
      when 2
        "#{author_list[0]} and #{author_list[1]}"
      else
        "#{author_list[0]}, #{author_list[1]}, and others"
      end
    end

    def self.get_venue(entry)
      venue = ""
      if entry['journal'] && !entry['journal'].empty?
        venue = "*#{entry['journal']}*"
      elsif entry['booktitle'] && !entry['booktitle'].empty?
        venue = "*#{entry['booktitle']}*"
      elsif entry['school'] && !entry['school'].empty?
        venue = "#{entry['school']}"
      elsif entry['note'] && !entry['note'].empty?
        venue = "*#{entry['note']}*"
      else
        venue = "*arXiv preprint*"
      end
      venue
    end
  end

  # Global citation tracking
  class CitationTracker
    @@citations = {}
    @@citation_order = []

    def self.reset_for_page
      @@citations = {}
      @@citation_order = []
    end

    def self.add_citation(key)
      unless @@citations[key]
        @@citations[key] = @@citation_order.length + 1
        @@citation_order << key
      end
      @@citations[key]
    end

    def self.get_citations
      @@citation_order
    end

    def self.get_citation_number(key)
      @@citations[key]
    end
  end

  # Hook to reset citations for each page
  Jekyll::Hooks.register :pages, :pre_render do |page|
    CitationTracker.reset_for_page
  end

  Jekyll::Hooks.register :documents, :pre_render do |document|
    CitationTracker.reset_for_page
  end

  class BibCitationTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @citation_key = text.strip
    end

    def render(context)
      site = context.registers[:site]
      
      # Load bibliography if not already loaded
      unless site.data['bibliography']
        BibParser.load_bibliography(site)
      end

      entry = site.data['bibliography'][@citation_key]
      # return "[#{@citation_key}]" unless entry

      # If citation not found, log warning and return empty string to skip it
      unless entry
        Jekyll.logger.warn "Citation Warning:", "Citation key '#{@citation_key}' not found in bibliography"
        return ""
      end

      # Add to citation tracker and get number
      citation_number = CitationTracker.add_citation(@citation_key)
      
      # Return formatted link
      "[[#{citation_number}]](#ref#{citation_number})"
    end
  end

  class BibReferenceListTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      # Optional: allow manual citation keys, otherwise use auto-collected ones
      @manual_keys = text.strip.empty? ? nil : text.strip.split(',').map(&:strip)
    end

    def render(context)
      site = context.registers[:site]
      
      # Ensure bibliography is loaded
      unless site.data['bibliography']
        BibParser.load_bibliography(site)
      end

      # Use manual keys if provided, otherwise use collected citations
      citation_keys = @manual_keys || CitationTracker.get_citations
      
      output = ""
      citation_keys.each_with_index do |key, index|
        entry = site.data['bibliography'][key]
        next unless entry

        citation_number = @manual_keys ? (index + 1) : CitationTracker.get_citation_number(key)
        ref_id = "ref#{citation_number}"
        citation = format_reference(entry, citation_number)
        output += "<a id=\"#{ref_id}\"></a>#{citation}\n\n"
      end
      
      output
    end

    private

    def format_reference(entry, number)
      citation = "[#{number}] #{entry['authors']} \"#{entry['title']}\" #{entry['venue']} (#{entry['year']})."
      if entry['url'] && !entry['url'].empty?
        citation += " [#{entry['url']}](#{entry['url']})"
      end
      citation
    end
  end

  class AutoReferencesTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      site = context.registers[:site]
      
      # Ensure bibliography is loaded
      unless site.data['bibliography']
        BibParser.load_bibliography(site)
      end

      # Get all citations collected on this page
      citation_keys = CitationTracker.get_citations
      return "" if citation_keys.empty?

      output = "\n## References\n\n"
      citation_keys.each do |key|
        entry = site.data['bibliography'][key]
        next unless entry

        citation_number = CitationTracker.get_citation_number(key)
        ref_id = "ref#{citation_number}"
        citation = format_reference(entry, citation_number)
        output += "<a id=\"#{ref_id}\"></a>#{citation}\n\n"
      end
      
      output
    end

    private

    def format_reference(entry, number)
      citation = "[#{number}] #{entry['authors']} \"#{entry['title']}\" #{entry['venue']} (#{entry['year']})."
      if entry['url'] && !entry['url'].empty?
        citation += " [#{entry['url']}](#{entry['url']})"
      end
      citation
    end
  end
end

Liquid::Template.register_tag('cite', Jekyll::BibCitationTag)
Liquid::Template.register_tag('references', Jekyll::BibReferenceListTag)
Liquid::Template.register_tag('auto_references', Jekyll::AutoReferencesTag)
