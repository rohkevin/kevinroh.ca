import React from 'react'
import './Works.scss'
import { useGlobalContext } from '../../context'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'

function Works() {
  const { projectsData } = useGlobalContext();
  return (
    <main id="works" className="page" >
      <section className="full full-mid works-intro">
        <h1>Works</h1>
        <p className="subtitle1">I've worked on a multitude of applications over my coding career, as well as passion projects and helping friends build their personal brands.</p>
        <p className="subtitle1">You can check them out here or go straight to my <a className="highlight" href="https://github.com/rohkevin" target="_blank" rel="noreferrer noopener">Github</a>.</p>
      </section>
      {/* Need to figure out how to dynamically load image based on screen size, my guess is useEffect */}
      <section className="works-container">
        {
        projectsData.map(project => {
          return (
            
            <ProjectPreview key={project.name} img={project.imageMed} {...project}/>
          )
        })
      }
      </section>
    </main>
  )
}

export default Works
