import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ImageSlider.scss'


function ImageSlider({ projectName, sliderImages }) {
  const [images, setImages] = useState(sliderImages);
  const [imageIndex, setImageIndex] = useState(0);

  

  const prevReview = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex!==0) {
        return prevIndex-1;
      } else {
        return images.length-1;
      }
    });
  }
  const nextReview = () => {
    let currentIndex = imageIndex;
    let nextIndex = ++currentIndex % images.length;
    setImageIndex(nextIndex);
  }

  return (
    <div id="image-slider">
      <button onClick={prevReview} className="img-btn left"><FaChevronLeft /></button>
      <figure className="image-container">
        <img src={`/assets/Images/Projects/${projectName}${images[imageIndex]}`} alt={`TEMPNAME`} />
      </figure>
      <div className="slider-location">
        {images.forEach((image, index)=> (<div className={ index === imageIndex ? "active-location location" : "location"} />))}
      </div>
      <button onClick={nextReview} className="img-btn right"><FaChevronRight /></button>
    </div>
  )
}

export default ImageSlider
