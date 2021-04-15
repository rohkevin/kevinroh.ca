import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
  return (
    <section>
      <section className="intro">
        <div className="intro-flex">
          <div className="textbox">
            <h1>Hi I'm Kevin</h1>
            <p>I'm a <span>full stack software engineer</span> from Toronto.</p>
          </div>
        </div>
      </section>
      <section className="home-works center">
        <h3>Works</h3>
        <div className="home-works-container">
          <div className="home-works-tile">
              <figure className="home-project-pic">
                  <Link to="/"><img src="../Resources/Images/Mobile Version/DSC04204.jpg" alt="ProjectNAME"/></Link>
              </figure>
              <h5>Project Name 1</h5>
          </div>
          <div className="home-works-tile">
            <figure className="home-project-pic">
              <Link to="/"><img src="../Resources/Images/Mobile Version/DSC04204.jpg" alt="ProjectNAME"/></Link>
            </figure>
            <h5>Project Name 2</h5>
          </div>
          <div className="home-works-tile">
            <figure className="home-project-pic">
              <Link to="/"><img src="../Resources/Images/Mobile Version/DSC04204.jpg" alt="ProjectNAME"/></Link>
            </figure>
            <h5>Project Name 3</h5>
          </div>
        </div>
        <Link to="/">VIEW ALL WORKS</Link>
      </section>
    </section>
  )
}

export default Home
