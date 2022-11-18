import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addCategoryToDb } from '../../utilities/fakedb.js';
import MovingText from 'react-moving-text'
import './Gallery.css'
import GalleryImage from '../GalleryImage/GalleryImage';
import GalleryGridItem from '../GalleryGridItem/GalleryGridItem';
const Gallery = ({ text, category, isTextVisible }) => {
  console.log("text,category: ", text, category);

  const handleCategory = (a) => {
    addCategoryToDb(a);
  }
  return (
    <div id="gallery-box">
      {isTextVisible && <h1>Choose your best {text}</h1>}
      <div className="grid-container">

        <div className="grid">
          {/* <GalleryGridItem category="Men's Boot"/> */}
          <GalleryGridItem category={category} />
        </div>
        <Link to="/shop" onClick={() => {
          handleCategory(category)
        }}><div className="gallery-overlay"><h2>{category}</h2></div></Link>
      </div>
    </div>


  )
}
export default Gallery