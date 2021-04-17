import React from 'react'
import { Link } from 'react-router-dom'
import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'
import { useThemeContext } from '../../themeContext'
import './Home.scss'

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
  return (
    <main className="page">
      <section className="home-intro">
        <h1>Hi I'm Kevin</h1>
        <p className="subtitle2">I'm a <Link to="/about" className={darkMode ? "bold" : "highlight"}>software engineer</Link> from Toronto.</p>
        <p className="subtitle2">I love clean design and clean code.</p>
      </section>

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

        <Link to="/works" className="url-link">VIEW ALL WORKS</Link>
      </section>
    </main>
  )
}

export default Home
