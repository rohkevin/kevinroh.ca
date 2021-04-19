import React, { useState } from 'react'
import './Musings.scss'
import {musings} from '../../tempdata'

import Musing from '../../Components/Musing/Musing'

function Musings() {
  const [musingsIndex, setMusingsIndex] = useState(5);

  const handleViewMore = () => {
    const newIndex = (musingsIndex + 5 > musings.length) ? musings.length : musingsIndex + 5;
    setMusingsIndex(newIndex);
  }
  return (
    <main className="page" id="musings">
      <div className="musings-intro full">
        <h1>Musings</h1>
        <p className="subtitle1">These are a collection of some famous sayings that help me stay inspired. The amount of wisdom left by those gone before us feels so incredibly valuable.</p>
        <p className="subtitle1">If you have a saying you'd like to share, I'd love to add it to my list</p>

      </div>
      <section className="musings-container">
        {
          musings.slice(0,musingsIndex).map((musing, index) => {
            const {date, quote, author} = musing;
            return (
              <Musing key={date} quote={quote} author={author} />
            )
          })
        }
        <button onClick={handleViewMore} className={musingsIndex === musings.length ? "display-none" : "view-more-btn fill"}>View more</button>
      </section>
    </main>
  )
}

export default Musings
