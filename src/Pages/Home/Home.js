import React from 'react'
import { Link } from 'react-router-dom'
import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'
import './Home.scss'

function Home() {
  return (
    <main className="page">
      <section className="home-intro">
        <h1>Hi I'm Kevin</h1>
        <p className="subtitle1">I'm a <Link to="/about" className="highlight">full stack software engineer</Link> from Toronto.</p>
      </section>

      <section className="home-section-outer">
        <Link to="/works" className="h2 section-title"><span className="highlight">Works</span></Link>
        <div className="home-section-inner">
          <ProjectPreview/>
        </div>

        <Link to="/works" className="url-link">VIEW ALL WORKS</Link>
      </section>
    </main>
  )
}

export default Home
