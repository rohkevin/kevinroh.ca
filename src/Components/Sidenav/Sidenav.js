import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './Sidenav.scss'

function Sidenav() {
  const { sidenavOpen, toggleSidenav } = useGlobalContext();

  return (
    <nav id="side-nav">
      <input type="checkbox" onClick={toggleSidenav}/>
      <span className="first"></span>
      <span></span>   {/* <!--nth-last-child(3)!--> */}
      <span></span>   {/* <!--nth-last-child(2)!--> */}
      
      <ul className={sidenavOpen ? 'sidenav-menu show-sidenav' : 'sidenav-menu'}> {/* <!--nth-last-child(1)!--> */}
        <div className="side-menu-container">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="works">WORKS</Link></li>
          <li><Link to="perspectives">PERSPECTIVES</Link></li>
          <li><Link to="musings">MUSINGS</Link></li>
          <li><Link to="about">ABOUT</Link></li>
        </div>
      </ul>
    </nav>
  )
}

export default Sidenav
