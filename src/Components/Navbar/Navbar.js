import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { links } from '../../tempdata';

function Navbar() {
  const [resumeIndex, setResumeIndex] = useState(0);
  useEffect(() => {
    if (links) {
      // Not checking for more links since it'll always be under 10
      setResumeIndex(`0${links.length+1}`);
    }
  },[links])

  if (links) {
    return (
      <nav id="navbar">
        {
          links.map(link=>{
            const { linkIndex, name, path } = link;
            return (
              <Link key={linkIndex + name} to={path} className="link-container"><p className="link-index">{linkIndex}</p><p className="link-name" title={name}>{name}</p></Link>
            )
          })
        }
        <a href="https://docs.google.com/document/d/1RH3yHIID9b1HuYIIrAjrS2_I9f9cm9kvGVAvKd8EcWQ/edit?usp=sharing" rel="noreferrer" target="_blank" className="link-container">
          <p className="link-index">{resumeIndex && resumeIndex}</p><p className="link-name" title="resume">resume</p>
        </a>
      </nav>
    )

  } else {
    return <nav id="navbar">No links</nav>
  }
}

export default Navbar
