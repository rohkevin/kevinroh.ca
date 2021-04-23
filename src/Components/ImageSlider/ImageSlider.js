import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ImageSlider.scss'
// if (index === imageIndex - 1 || (imageIndex === 0 && index === images.length -1)) {
//               position = 'last-slide';
//             }

function ImageSlider({ projectName, sliderImages }) {
  const [images, setImages] = useState(sliderImages);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (imageIndex < 0){
      setImageIndex(lastIndex);
    }
    if (imageIndex > lastIndex){
      setImageIndex(0);
    }
  }, [imageIndex, images])

  const handleChangeImageLocation = (index) => {
    setImageIndex(index);
  }
  
  if (images){
    return (
      <div id="image-slider">
        <div className="image-container">
          {images.map((image, index) => {
            let position = 'next-slide';
            if (index === imageIndex) {
              position = 'active-slide';
            }
            
            if (index === imageIndex -1 || (imageIndex === 0 && index === images.length -1) || imageIndex > index) {
              position = 'last-slide';
            }
            if (imageIndex < index) {position='next-slide'};
            return (
              <figure className={`image-slide ${position}`} key={projectName + index}>
                <img src={`/assets/Images/Projects/${projectName}${image}`} alt={`TEMPNAME`} />
              </figure>
            )
          })}
        </div>

        <div className="slider-location">
          {images.map((image, index) => {
            return (
              <button 
                key={`slider${index}`} 
                className={ index === imageIndex ? "active-location location" : "location"} 
                onClick={()=>handleChangeImageLocation(index)}
              />
            )
          })}
        </div>
        <button onClick={() => setImageIndex(imageIndex -1)} className="img-btn left"><FaChevronLeft /></button>
        <button onClick={() => setImageIndex(imageIndex + 1)} className="img-btn right"><FaChevronRight /></button>
      </div>
    )
  } else {
    return (
      <div>Images coming soon</div>
    )
  }
}

export default ImageSlider
