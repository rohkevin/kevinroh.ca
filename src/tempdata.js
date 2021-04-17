import { FaLinkedinIn, FaGithub, FaRegEnvelopeOpen, FaInstagram, FaSpotify } from 'react-icons/fa'

export const social = [
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