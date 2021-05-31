import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { links } from '../../tempdata';

function Navbar() {

  return (
    <nav id="navbar">
      {
        links.map(link=>{
          const { linkIndex, name, path } = link;
          return (
            <Link key={linkIndex + name} to={path} className="link-container"><p className="link-index">{linkIndex}</p><p className="link-name highlight">{name}</p></Link>
          )
        })
      }
    </nav>
  )
}

export default Navbar
