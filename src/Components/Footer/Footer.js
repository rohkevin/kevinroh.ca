import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';

function Footer() {
  const { openContact, socialData } = useGlobalContext();
  return (
    <footer>
      <div className="footer-container">
        {/* <Link to="/" className="h5">KEVIN ROH</Link> */}
        <div className="footer-links">
            <Link to="/" className="footer-nav">HOME</Link>
            <Link to="/works" className="footer-nav">WORKS</Link>
            <Link to="/perspectives" className="footer-nav">PERSPECTIVES</Link>
            <Link to="/musings" className="footer-nav">MUSINGS</Link>
            <Link to="/about" className="footer-nav">ABOUT</Link>
            <p type="button" onClick={openContact} className="footer-nav">Contact</p>
        </div>
        <div className="icon-list">
          {socialData.map(social => <a key={social.name} href={social.url} className="social-icon" target="_blank" rel="noopener noreferrer">{social.icon}</a>)}
          
        </div>
        <p className="copyright">&copy; 2021 Kevin Roh</p>
      </div>
          
    </footer>
  )
}

export default Footer
