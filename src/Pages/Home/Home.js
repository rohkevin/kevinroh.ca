import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { projectPreviews } from '../../tempdata'
import './Home.scss'

import { useGlobalContext } from '../../context'
import { useThemeContext } from '../../themeContext'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'
import OtherPreview from '../../Components/OtherPreview.js/OtherPreview'

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
        
        <div id="home-works">
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
        <div id="home-others">
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
      <div className="divider"></div>

      <section className="home-section-outer">
        <div id="home-more">
          <h2 className="h3">Want to know more?</h2>
          <p className="subtitle1">Check out my <Link to="/about" className="highlight">bio here</Link> or just <span onClick={openContact} className=" highlight">say hi!</span></p>
        </div>
      </section>
    </main>
  )
}

export default Home
