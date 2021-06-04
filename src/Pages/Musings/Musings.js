import React, { useEffect, useState } from 'react'
import './Musings.scss'
import { useGlobalContext } from '../../context';
import { musings } from '../../tempdata'

import Musing from '../../Components/Musing/Musing'

function Musings() {
  const [musingsIndex, setMusingsIndex] = useState(5);
  const { setPageName } = useGlobalContext();
  useEffect(()=>setPageName('Musings'));

  const handleViewMore = () => {
    const newIndex = (musingsIndex + 5 > musings.length) ? musings.length : musingsIndex + 5;
    setMusingsIndex(newIndex);
  }
  return (
    <main id="musings" className="page">
      <div className="max-width">
        <div className="musings-intro full full-mid">
          <h1>Musings</h1>
          <p className="subtitle1">These are a collection of some famous sayings that help me stay inspired. The amount of wisdom left by those gone before us feels so incredibly valuable.</p>

        </div>
        <section className="musings-container">
          {
            musings.slice(0,musingsIndex).map((musing, index) => {
              const {date, quote, author} = musing;
              return (
                <Musing key={date+author} quote={quote} author={author} />
              )
            })
          }
          <button onClick={handleViewMore} className={musingsIndex === musings.length ? "display-none" : "view-more-btn fill"}>View more</button>
        </section>
      </div>
    </main>
  )
}

export default Musings
