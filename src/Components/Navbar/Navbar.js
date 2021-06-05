import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { links } from '../../tempdata';
import { useGlobalContext } from '../../context';
import LeisureModal from '../LeisureModal/LeisureModal'

function Navbar() {
  const { openContact, leisureModal, leisureLocation, toggleLeisure } = useGlobalContext();
  const [leisureIndex, setLeisureIndex] = useState(0);
  const [contactIndex, setContactIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(0);
  

  useEffect(() => {
    if (links) {
      // Not checking for more links since it'll always be under 10
      setLeisureIndex(`0${links.length+1}`);
      setContactIndex(`0${links.length+2}`);
      setResumeIndex(`0${links.length+3}`);
    }
  },[links])

  if (links) {
    return (
      <nav id="navbar">
        {/* Links */}
        {
          links.map(link=>{
            const { linkIndex, name, path } = link;
            return (
              <Link key={linkIndex + name} to={path} className="link-container"><p className="link-index">{linkIndex}</p><p className="link-name" title={name}>{name}</p></Link>
            )
          })
        }
        <div className="link-container" onClick={toggleLeisure} id="leisure-link">
          <p className="link-index">{leisureIndex && leisureIndex}</p>
          <p className="link-name" title="contact">leisure</p>
        </div>
        <div className="link-container" onClick={openContact}>
          <p className="link-index">{contactIndex && contactIndex}</p>
          <p className="link-name" title="contact">contact</p>
        </div>
        <a href="https://docs.google.com/document/d/1RH3yHIID9b1HuYIIrAjrS2_I9f9cm9kvGVAvKd8EcWQ/edit?usp=sharing" rel="noreferrer" target="_blank" className="link-container">
          <p className="link-index">{resumeIndex && resumeIndex}</p>
          <p className="link-name" title="resume">resume</p>
        </a>

        {/* Modal for Leisure */}
        <LeisureModal modal={leisureModal} index={leisureIndex} location={leisureLocation}/>
      </nav>
    )

  } else {
    return <nav id="navbar">No links</nav>
  }
}

export default Navbar
