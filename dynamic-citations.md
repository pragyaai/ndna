# Dynamic Citations from BibTeX

You can dynamically cite papers from your `references.bib` file! Here's how it works:

## Usage Examples

**Individual citations:**
- Here's a citation: {% cite wallace2019universal %}
- Another one: {% cite carlini2022quantifying %}
- And another: {% cite goodfellow2014explaining %}

**In-text citations with links:**
Recent work on adversarial triggers [[1]](#ref1) has shown that language models can be vulnerable to specific input patterns. This builds on earlier work on adversarial examples [[2]](#ref2) and has implications for model security [[3]](#ref3).

## How to Use

1. **For individual citations:** Use `{% cite citation_key %}` anywhere in your text
2. **For reference lists:** Use `{% references key1,key2,key3 %}` to generate a numbered reference list
3. **For linked citations:** Use `[[1]](#ref1)` style links that connect to the reference list

## Dynamic Reference List

{% references wallace2019universal,carlini2022quantifying,goodfellow2014explaining %}

## Benefits

✅ **Automatic formatting** - Citations are formatted consistently  
✅ **Dynamic updates** - Change the bib file, citations update automatically  
✅ **No duplication** - Single source of truth in your `references.bib`  
✅ **Error handling** - Missing citations show the key instead of breaking  
✅ **Performance** - Bib file is parsed once and cached  

## Integration with Your Paper

You can now replace the hardcoded references in your pages md file with dynamic ones!
