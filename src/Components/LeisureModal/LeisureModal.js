import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './LeisureModal.scss'

function LeisureModal({ modal, location }) {
  
  const leisureRef = useRef(null);
  
  useEffect(() => {
    const leisureProfile = leisureRef.current;
    const { left, bottom } = location;
    leisureProfile.style.left = `calc(${left}px + 5px)`;
    leisureProfile.style.top = `calc(${bottom}px + 10px)`;
  }, [location]) 

  return (
    <div 
      className={modal ? "leisure-modal show-leisure" : "leisure-modal"} 
      ref={leisureRef}>
      <Link to="/perspectives" className="leisure-link-container">
        <p className="leisure-link-index"></p>
        <p className="leisure-link-name" title="perspectives">perspectives</p>
      </Link>
      <Link to="/musings" className="leisure-link-container">
        <p className="leisure-link-index"></p>
        <p className="leisure-link-name" title="musings">musings</p>
      </Link>
    </div>
  )
}

export default LeisureModal
