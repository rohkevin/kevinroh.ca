import React, { useEffect, useState } from 'react'
import './Perspectives.scss'
import { useGlobalContext } from '../../context';
import Masonry from 'react-masonry-css'
import { photos } from '../../tempdata'

function Perspectives() {
  const [images, setImages] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const { setPageName } = useGlobalContext();

  useEffect(() => {
    setPageName('Perspectives');
    if (photos) {
      setImages(photos);
    }
  }, [setPageName]);

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

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('full-image-overlay')){
      setImageModal(false);
    }
  }

  const handleImageClick = (img) => {
    setImageModal(true);
    setModalImage(img);
  }

  const breakpoints = {
    default: 3,
    1280: 2,
    900: 1
  };

  return (
    <main id="perspectives">
      <div className="max-width">
        <div className="page full full-mid">
          <h1>Perspectives</h1>
          <p className="subtitle1">It's incredible to know that everyone interprets the world in their own way. Let me share with you a bit of what I've seen from my perspective.</p>

        </div>
        {/* Full Image on click */}
        {
          imageModal && modalImage ? 
            <div className={imageModal && modalImage ? 'full-image-overlay' : 'display-none'} onClick={handleOutsideClick}>
              <figure>
                <img src={process.env.PUBLIC_URL + `/assets/Images${modalImage.path}`} alt={modalImage.name} onClick={()=>setImageModal(false)}/>
              </figure>
            </div>
          :
            null
        }
        
        {/* Masonry container */}
        <div className="perspectives-container">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
          {images ? images.map(image => {
            return (
              <figure key={image.name} className="perspectives-figure" >

                <div className="image-overlay" onClick={()=> handleImageClick(image)}/>
                <div className="image-details fadeIn-bottom" onClick={()=> handleImageClick(image)}>
                  <p className="image-details-title">{image.name}</p>
                  <p className="image-details-location">{image.location}</p>
                </div>
                
                <img src={process.env.PUBLIC_URL + `/assets/Images${image.path}`} alt={image.name} onClick={()=> handleImageClick(image)}/>


              </figure>
            )
          }) : null}
          </Masonry>
        </div>

      </div>
    </main>
  )
}

export default Perspectives
