import React, { useEffect } from 'react'
import './Works.scss'
import { useGlobalContext } from '../../context'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'

function Works() {
  const { setPageName, projectsData } = useGlobalContext();
  useEffect(() => {
    setPageName('Works')
  }, [setPageName])
  return (
    <main id="works" className="page" >
      <div className="max-width">
        <section className="full full-mid works-intro">
          <h1>Works</h1>
          <p className="subtitle1">I've worked on multiple applications over my coding career, as well as passion projects and helping friends build their personal brands.</p>
          <p className="subtitle1">You can check them out here or go straight to my <a className="highlight" href="https://github.com/rohkevin" target="_blank" rel="noreferrer noopener">Github</a>.</p>
        </section>
        {/* Need to figure out how to dynamically load image based on screen size, my guess is useEffect */}
        <section className="works-container">
          {
          projectsData.map((project, index) => {
            return (
              <ProjectPreview 
                key={project.id} 
                index={index} 
                coverImage={project.coverImage} 
                {...project}
              />
            )
          })
        }
        </section>
      </div>
    </main>
  )
}

export default Works
