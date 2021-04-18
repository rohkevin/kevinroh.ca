import React from 'react'
import { Link } from 'react-router-dom'
import './OtherPreview.scss'

function OtherPreview({ title, subtitle, linkTitle, link }) {
  return (
    <div className="others-card">
      <h5>{title}</h5>
      <p className="subtitle2">{subtitle}</p>
      <Link to={link}><button className="fill others-btn">{linkTitle}</button></Link>
    </div>
  )
}

export default OtherPreview
