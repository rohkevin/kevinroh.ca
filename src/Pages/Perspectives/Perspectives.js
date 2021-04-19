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

  return (
    <main id="perspectives">
      <div className="page full perspectives-intro">
        <h1>Perspectives</h1>
        <p className="subtitle1">It's incredible to know that everyone interprets the world in their own way. Let me share with you a bit of what I've seen from my perspective.</p>

      </div>

      <div className="perspectives-container">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
        {photos.map(photo => {
          return (
            <figure key={photo.name} className="perspectives-figure">
              <img src={`/assets/Images${photo.path}`} alt={photo.name} />
            </figure>
          )
        })}
        </Masonry>
      </div>
    </main>
  )
}

export default Perspectives
