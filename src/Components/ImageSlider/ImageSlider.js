import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ImageSlider.scss'

function ImageSlider({ projectName, sliderImages }) {
  const [images, setImages] = useState(sliderImages);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    if (images) {
      const lastIndex = images.length - 1;
      if (imageIndex < 0){
        setImageIndex(lastIndex);
      }
      if (imageIndex > lastIndex){
        setImageIndex(0);
      }
    }
  }, [imageIndex, images]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        setImageModal(false);
      }
    }
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    }
  }, []);


  const handleChangeImageLocation = (index) => {
    setImageIndex(index);
  }
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('image-overlay')){
      setImageModal(false);
    }
  }

  
  if (images){
    return (
      <>
        <div className={imageModal ? 'image-overlay' : 'display-none'} onClick={handleOutsideClick}>
          <figure>
            <img src={`/assets/Images/Projects/${projectName}${images[imageIndex]}`} alt={`${projectName} img-${imageIndex}`}  onClick={() => null}/>
          </figure>
        </div>
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
                  <img src={`/assets/Images/Projects/${projectName}${image}`} alt={`${projectName} img-${index}`}  onClick={() => setImageModal(true)}/>
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
      </>
    )
  } else {
    return (
      <div>Images coming soon</div>
    
    )
  }
}

export default ImageSlider
