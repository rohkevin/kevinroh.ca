import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../themeContext'
import { FaChevronRight } from 'react-icons/fa'
import './Home.scss'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'
import OtherPreview from '../../Components/OtherPreview.js/OtherPreview'
import { useGlobalContext } from '../../context'


const projectPreviews = [
  {
    name: "project1",
    description: "Short description lorem ipsum dolor sit amet consectetur, adipisicing elit. In rerum adipisci consequatur iure deserunt.",
    stack: "React NodeJS API",
    github: "https://github.com",
    live: "https://google.com",
    imageSm: "/MobileVersion/iphonemockup-2.jpg",
    imageMed: "/DesktopVersion/mockup1.jpg",
    imageLg: "/DesktopVersion/mockup1",
  },
  {
    name: "project2",
    description: "Short description Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rerum adipisci consequatur iure deserunt.",
    stack: "React NodeJS API",
    github: "https://github.com",
    live: "https://google.com",
    imageSm: "/MobileVersion/iphonemockup-2.jpg",
    imageMed: "/DesktopVersion/mockup1.jpg",
    imageLg: "/DesktopVersion/mockup1",
  },
  {
    name: "project3",
    description: "Short description Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rerum adipisci consequatur iure deserunt.",
    stack: "React NodeJS API",
    github: "https://github.com",
    live: "https://google.com",
    imageSm: "/MobileVersion/iphonemockup-2.jpg",
    imageMed: "/DesktopVersion/mockup1.jpg",
    imageLg: "/DesktopVersion/mockup1",
  },
]

function Home() {
  const { darkMode } = useThemeContext();
  const { openContact } = useGlobalContext();
  const [showHover, setShowHover] = useState(false);

  const hoverLink = (e) => {
    showHover(!setShowHover);
  }

  return (
    <main className="page">
      <section className="home-intro">
        <h1>Hi I'm Kevin</h1>
        <p className="subtitle2">I'm a <Link to="/about" className={darkMode ? "bold" : "highlight"}>software engineer</Link> from Toronto.</p>
        <p className="subtitle2">I love clean design & clean code.</p>
      </section>

      {/* WORKS SECTION */}
      <section className="home-section-outer">
        <Link to="/works" className="h2 section-title"><span className={darkMode ? "h2" : "highlight"}>Works</span></Link>
        
        <div className="home-section-inner">
        {
          projectPreviews.map(preview => {
            return (
              <ProjectPreview key={preview.name} name={preview.name} img={preview.imageMed} description={preview.description} stack={preview.stack} github={preview.github} live={preview.live}/>
            )
          })
        }
        </div>
        <Link to="/works" className="url-link displace-btn-up" onMouseOver={()=>hoverLink}><FaChevronRight className="hover-chevron" />VIEW ALL WORKS</Link>
      </section>
      <div className="divider"></div>


      {/* OTHERS SECTION */}
      <section className="home-section-outer">
        <div className="home-section-inner">

          <OtherPreview 
            title="I take pictures, sometimes"
            subtitle="About life, travels, and whatever catches my attention"
            linkTitle="See my perspective"
            link="/perspectives"
          />
          <OtherPreview 
            title="I collect quotes"
            subtitle="Some wonderful sayings that have shaped who I am today"
            linkTitle="Read my thoughts"
            link="/musings"
          />
        </div>
      </section>
      <section className="home-section-outer">
        <div className="home-section-inner">
          <h2 className="h3">Want to know more?</h2>
          <p className="subtitle1">Check out my <Link to="/about" className="highlight">bio here</Link> or just <span onClick={openContact} className=" highlight">say hi!</span></p>
        </div>
      </section>
    </main>
  )
}

export default Home
