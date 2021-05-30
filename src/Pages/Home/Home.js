import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import './Home.scss'

import { useGlobalContext } from '../../context'
import { useThemeContext } from '../../themeContext'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'
import OtherPreview from '../../Components/OtherPreview.js/OtherPreview'

function Home() {
  const { darkMode } = useThemeContext();
  const { setPageName, openContact, projectsData } = useGlobalContext();
  const [showHover, setShowHover] = useState(false);

  useEffect(()=>setPageName('Kevin Roh'));

  const hoverLink = (e) => {
    showHover(!setShowHover);
  }

  return (
    <main id="home" className="page">
      <div className="max-width">
        <section className="home-intro full full-mid">
          <h1>Hi I'm Kevin</h1>
          <p className="subtitle2">I'm a <Link to="/about" className={darkMode ? "bold" : "highlight"}>full stack software engineer</Link> from Toronto</p>
        </section>

        {/* WORKS SECTION */}
        <section className="home-section-outer">
          <Link to="/works" className="h2 section-title"><span className="highlight">Works</span></Link>
          
          <div className="home-works">
            {projectsData.slice(0,4).map((project, index) => {
              return (
                <ProjectPreview key={project.id} index={index} img={project.sliderImages[0]} {...project}/>
              )
            })}
          </div>
          <Link to="/works" className="url-link displace-btn-up" onMouseOver={()=>hoverLink}><FaChevronRight className="hover-chevron" />VIEW ALL WORKS</Link>
        </section>
        <div className="divider"></div>


        {/* OTHERS SECTION */}
        <section className="home-section-outer">
          <div className="home-others">
            <OtherPreview 
              title="I take pictures sometimes"
              subtitle="About life, travels, and whatever catches my attention"
              linkTitle="See my perspective"
              link="/perspectives"
            />
            <OtherPreview 
              title="I collect quotes"
              subtitle="Some sayings that shaped who I am today"
              linkTitle="Read my thoughts"
              link="/musings"
            />
          </div>
        </section>
        <div className="divider"></div>

        <section className="home-section-outer">
          <div className="home-more">
            <h2 className="h3">Want to know more?</h2>
            <p className="subtitle1">Check out my <Link to="/about" className="highlight">bio here</Link> or just <span onClick={openContact} className=" highlight">say hi!</span></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
