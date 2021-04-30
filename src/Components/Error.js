import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="page full full-mid">
      <h1>Error</h1>
      <p className="subtitle1">This page does not exist! Click here to go back <Link to="/" className="highlight">Home</Link></p>
    </div>
  )
}

export default Error
