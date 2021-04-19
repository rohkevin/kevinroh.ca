import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectPreview({name, img, description, stack, github, live}) {
  return (
    <div className="preview-card">
      <Link to={`/works/${name}`}>
        <figure className="preview-pic"><img src={`/assets/Images${img}`} alt={name} /></figure>
      </Link>
      <Link to={`/works/${name}`}><h5>{name}</h5></Link>
      <p className="subtitle2">{description}</p>
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
