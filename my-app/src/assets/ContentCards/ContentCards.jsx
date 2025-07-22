import React from 'react';
import './ContentCards.css'; 
import { FaExternalLinkAlt } from "react-icons/fa";

const ContentCards = ({ title, text, imageSrc }) => {
  return (
    <div className='cardSection'>
      <h1 id="contentTitle">{title}</h1>

      <div className='descriptionDiv'>
        <div className='rightSectionDiv'>
          <img src={imageSrc}></img>
        </div>

        <div className='leftSectionDiv'>
          <p>{text}</p>
          <FaExternalLinkAlt id='externalLink'/>
        </div>

      </div>
    </div>
  );
};

export default ContentCards;