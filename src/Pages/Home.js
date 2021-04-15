import React from 'react'
import { Link } from 'react-router-dom'
import ProjectPreview from '../Components/ProjectPreview'
import './Home.scss'

function Home() {
  return (
    <main className="page">
      <section className="intro">
        <div className="intro-flex">
          <h1>Hi I'm Kevin</h1>
          <p className="subtitle1">I'm a <span className="text-link">full stack software engineer</span> from Toronto.</p>
        </div>
      </section>

      <section className="">
        <h2 className="h4">Works</h2>
        <div className="">
          <ProjectPreview/>
        </div>

        <Link to="/works" className="url-link">VIEW ALL WORKS</Link>
      </section>
    </main>
  )
}

export default Home
