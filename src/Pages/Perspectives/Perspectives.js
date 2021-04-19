import React from 'react'
import './Perspectives.scss'
import Masonry from 'react-masonry-css'
import {photos} from '../../tempdata'

function Perspectives() {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };
  const imgBase = "";

  return (
    <main id="perspectives">
      <div className="page full">
        <h1>Perspectives</h1>
        <p className="subtitle1">Here's a bit of what I've seen.</p>

      </div>

      <div className="perspectives-container">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
        {/* {photos.map(photo => {
          let imgSrc = require(imgBase + photo.path);
          return (
            <figure key={photo.name}>
              <img src={imgSrc.default} alt={photo.name} />
            </figure>
          )
        })} */}
        </Masonry>
      </div>
    </main>
  )
}

export default Perspectives
