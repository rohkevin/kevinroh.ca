import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './Sidenav.scss'
import { links } from '../../tempdata';
import { FiChevronDown } from 'react-icons/fi'

function Sidenav() {
  const { sidenavOpen, setSidenavOpen, toggleSidenav, openContact } = useGlobalContext();
  const [showChevron, setShowChevron] = useState(false);
  const [showSidenavLeisure, setShowSidenavLeisure] = useState(false);

  const hoverLink = () => {
    setShowChevron(!showChevron);
  } 
  const handleContactClick = () => {
    setSidenavOpen(false);
    openContact()
  }
  const toggleShowLeisure = () => {
    setShowSidenavLeisure(!showSidenavLeisure);
  }

  if (links) {
    return (
      <nav id="side-nav">
        <input id="sidenav-toggle" type="checkbox" onClick={toggleSidenav}/>
        <label htmlFor="sidenav-toggle" className="display-none">Side navigation</label>
        <span className={sidenavOpen ? "first show-first" : "first"}></span>
        {/* <span className="first"></span> */}
        <span className={sidenavOpen ? "second show-second" : "second"}></span>   {/* <!--nth-last-child(3)!--> */}
        <span className={sidenavOpen ? "third show-third" : "third"}></span>   {/* <!--nth-last-child(2)!--> */}
        
        <div className={sidenavOpen ? 'sidenav-menu show-sidenav' : 'sidenav-menu'}> {/* <!--nth-last-child(1)!--> */}
          <div className="side-menu-container">
            {links.map((link) => {
              return (
                <Link key={link.name} to={link.path} className="sidenav-link" onClick={()=>setSidenavOpen(false)}>
                  <p>{link.name.toUpperCase()}</p>
                </Link>
              )
            })}

            <div className="sidenav-link" onMouseOver={hoverLink} onClick={toggleShowLeisure}>
              <p>LEISURE <FiChevronDown className={showSidenavLeisure ? "sidenav-chevron rotate-chevron" : "sidenav-chevron"}/></p>
            </div>

            <div className={showSidenavLeisure ? "sidenav-leisure show-side-leisure" : "sidenav-leisure"} >
              <Link to="/perspectives" className="sidenav-link" onClick={()=>setSidenavOpen(false)}>
                <p>PERSPECTIVES</p>
              </Link>
              <Link to="/musings" className="sidenav-link" onClick={()=>setSidenavOpen(false)}>
                <p>MUSINGS</p>
              </Link>
            </div>
            
            <div className="sidenav-link" onClick={handleContactClick}>
              <p>CONTACT</p>
            </div>
            <a href="https://docs.google.com/document/d/1RH3yHIID9b1HuYIIrAjrS2_I9f9cm9kvGVAvKd8EcWQ/edit?usp=sharing" rel="noreferrer" target="_blank" className="sidenav-link">
              <p>RESUME</p>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Sidenav
