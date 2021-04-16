import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen, FaInstagram, FaSpotify } from 'react-icons/fa'
const social = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kevinroh/",
    icon: <FaLinkedinIn className="social-icon"/>
  },
  {
    name: "github",
    url: "https://github.com/rohkevin/",
    icon: <FaGithub className="social-icon"/>
  },
  {
    name: "email",
    url: "mailto:kevinrohmail@gmail.com",
    icon: <FaRegEnvelopeOpen className="social-icon"/>
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/roh.kev/",
    icon: <FaInstagram className="social-icon"/>
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/user/12147067787?si=VhR6p9WeSTqW31I75Mhmig",
    icon: <FaSpotify className="social-icon"/>
  },
];

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/" className="h5">KEVIN ROH</Link>
        <div className="footer-links">
            <Link to="/" className="footer-nav">HOME</Link>
            <Link to="/works" className="footer-nav">WORKS</Link>
            <Link to="/perspectives" className="footer-nav">PERSPECTIVES</Link>
            <Link to="/musings" className="footer-nav">MUSINGS</Link>
            <Link to="/about" className="footer-nav">ABOUT</Link>
        </div>
        <div className="icon-list">
          {social.map(social => <a key={social.name} href={social.url} className="social-icon" target="_blank" rel="noopener noreferrer">{social.icon}</a>)}
          
        </div>
        <p className="copyright">&copy; 2021 Kevin Roh</p>
      </div>
          
    </footer>
  )
}

export default Footer
