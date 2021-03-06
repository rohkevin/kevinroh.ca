import React from 'react'
import './Musing.scss'
import { FaQuoteLeft } from 'react-icons/fa'
function Musing({ quote, author }) {
  return (
    <div className="musing-card" data-aos="fade-up" data-aos-duration="1000">
      <div className="divider"></div>
      <FaQuoteLeft className="quote-icon"/>
      <p className="body1 italic quote">{quote}</p>
      <p className="body1 author">{author}</p>
    </div>
  )
}

export default Musing
