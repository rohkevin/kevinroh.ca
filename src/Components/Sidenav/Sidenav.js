import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './Sidenav.scss'
import { FaChevronRight } from 'react-icons/fa'

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "works",
    path: "/works"
  },
  {
    name: "perspectives",
    path: "/perspectives"
  },
  {
    name: "musings",
    path: "/musings"
  },
  {
    name: "about",
    path: "/about"
  },
];

function Sidenav() {
  const { sidenavOpen, setSidenavOpen, toggleSidenav } = useGlobalContext();
  const [showChevron, setShowChevron] = useState(false);
  
  const hoverLink = (e) => {
    setShowChevron(!showChevron);
  } 

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
        {
          links.map((link) => {
            return (
              <Link key={link.name} to={link.path} className="sidenav-link" onMouseOver={()=>hoverLink} onClick={()=>setSidenavOpen(false)}>
                <FaChevronRight className="sidenav-chevron"/>
                <p>{link.name.toUpperCase()}</p>
              </Link>
            )
          })
        }
        </div>
      </div>
    </nav>
  )
}

export default Sidenav
