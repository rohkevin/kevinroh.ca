import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ImageSlider.scss'

function ImageSlider({ id, projectName, sliderImages }) {
  const [images, setImages] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    if (sliderImages) {
      setImages(sliderImages);
    }
  }, [sliderImages])

  useEffect(() => {
    if (images && images.length > 1) {
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

  
  if (!images || images.length === 0){
    return (
      <div>
        <p>Images coming soon</p>
        <br/>
      </div>
    )
  } else {
    return (
      <>
        <div className={imageModal ? 'image-overlay' : 'display-none'} onClick={handleOutsideClick}>
          <figure>
            <img src={`/assets/Images/Projects/${id}${images[imageIndex]}`} alt={`${projectName} img-${imageIndex} full`}  onClick={() => null}/>
          </figure>
        </div>
        <div id="image-slider">
          <div className="image-container">
            {images.map((image, index) => {
              let position = 'next-slide';
              if (index === imageIndex) {
                position = 'active-slide';
              }
              
              if (index === imageIndex - 1 || (imageIndex === 0 && index === images.length - 1 && images.length > 1) || imageIndex > index) {
                position = 'last-slide';
              }
              if (imageIndex < index) {position='next-slide'};
              return (
                <figure className={`image-slide ${position}`} key={`${projectName} img-${index}`}>
                  <img src={`${process.env.PUBLIC_URL}/assets/Images/Projects/${id}${image}`} alt={`${projectName} img-${index}`}  onClick={() => setImageModal(true)}/>
                </figure>
              )
            })}
          </div>

          <div className="slider-location">
            {images.length > 1 ? 
              images.map((image, index) => {
                return (
                  <button 
                    key={`slider${index}`} 
                    className={ index === imageIndex ? "active-location location" : "location"} 
                    onClick={()=>handleChangeImageLocation(index)}
                  />
                )
            }) : null}
          </div>
          <button onClick={() => setImageIndex(imageIndex - 1)} className={images.length > 1 ? "img-btn left" : "display-none"}><FaChevronLeft /></button>
          <button onClick={() => setImageIndex(imageIndex + 1)} className={images.length > 1 ? "img-btn right" : "display-none"}><FaChevronRight /></button>
        </div>
      </>
    )
  }
}

export default ImageSlider
