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
      <input type="checkbox" onClick={toggleSidenav}/>
      <span className={sidenavOpen ? "first show-first" : "first"}></span>
      {/* <span className="first"></span> */}
      <span className={sidenavOpen ? "second show-second" : "second"}></span>   {/* <!--nth-last-child(3)!--> */}
      <span className={sidenavOpen ? "third show-third" : "third"}></span>   {/* <!--nth-last-child(2)!--> */}
      
      <ul className={sidenavOpen ? 'sidenav-menu show-sidenav' : 'sidenav-menu'}> {/* <!--nth-last-child(1)!--> */}
        <div className="side-menu-container">
        {
          links.map((link) => {
            return (
              <Link key={link.name} to={link.path} className="link" onMouseOver={()=>hoverLink} onClick={()=>setSidenavOpen(false)}>
                <FaChevronRight className="sidenav-chevron"/>
                <p>{link.name.toUpperCase()}</p>
              </Link>
            )
          })
        }
        </div>
      </ul>
    </nav>
  )
}

export default Sidenav
