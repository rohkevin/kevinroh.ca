import React from 'react'
import './Works.scss'
import {projects} from '../../tempdata'

import ProjectPreview from '../../Components/ProjectPreview/ProjectPreview'

function Works() {
  return (
    <main id="works" className="page" >
      <section className="full full-mid works-intro">
        <h1>Works</h1>
        <p className="subtitle1">I've worked on a multitude of applications over my coding career, as well as passion projects and helping friends build their personal brands.</p>
        <p className="subtitle1">You can check them out here or go straight to my <a className="highlight" href="https://github.com/rohkevin" target="_blank" rel="noreferrer noopener">Github</a>.</p>
      </section>

      <section className="works-container">
        {
        projects.map(preview => {
          return (
            <ProjectPreview key={preview.name} name={preview.name} img={preview.imageMed} summary={preview.summary} stack={preview.stack} github={preview.github} live={preview.live}/>
          )
        })
      }
      </section>
    </main>
  )
}

export default Works
