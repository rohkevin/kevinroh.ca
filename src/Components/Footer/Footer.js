import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context';

function Footer() {
  const { openContact, socialData } = useGlobalContext();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-nav">
            <Link to="/" className="footer-links" title="HOME">HOME</Link>
            <Link to="/works" className="footer-links" title="WORKS">WORKS</Link>
            <Link to="/perspectives" className="footer-links" title="PERSPECTIVES">PERSPECTIVES</Link>
            <Link to="/musings" className="footer-links" title="MUSINGS">MUSINGS</Link>
            <Link to="/about" className="footer-links" title="ABOUT">ABOUT</Link>
            <p type="button" onClick={openContact} className="footer-links" title="CONTACT">Contact</p>
            <a href="https://docs.google.com/document/d/1RH3yHIID9b1HuYIIrAjrS2_I9f9cm9kvGVAvKd8EcWQ/edit?usp=sharing" rel="noreferrer" target="_blank" className="link-container">
              <p className="footer-links" title="RESUME">RESUME</p>
            </a>
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
