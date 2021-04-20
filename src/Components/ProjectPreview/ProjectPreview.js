import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectPreview({ name, img, summary, stack, github, live }) {
  return (
    <div className="preview-card">
      <Link to={`/works/${name}`}>
        <figure className="preview-pic"><img src={`/assets/Images${img}`} alt={name} /></figure>
      </Link>
      <h5><Link to={`/works/${name}`} className="h5">{name}</Link></h5>
      <p className="subtitle2">{summary}</p>
      <p className="subtitle2 stack">{stack}</p>
      <div className="preview-icons-container">
        <Link to={`/works/${name}`}><button className="fill preview-btn">Go to project</button></Link>
        <a href={github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
        <a href={live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>
      </div>
    </div>
  )
}

export default ProjectPreview
