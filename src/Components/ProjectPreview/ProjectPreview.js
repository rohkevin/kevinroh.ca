import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function ProjectPreview({ name, img, summary, description, stack, github, live }) {
  const projectName = name.replace(/\s/g, '');

  return (
    <div className="preview-card">
      <Link to={`/works/${projectName}`}>
        <figure className="preview-pic"><img src={`/assets/Images${img}`} alt={name} /></figure>
      </Link>
      <h5><Link to={`/works/${projectName}`} className="h5">{name}</Link></h5>
      <p className="subtitle2">{summary}</p>
      <p className="subtitle2 stack">{stack}</p>
      <div className="preview-icons-container">
        <Link to={`/works/${projectName}`}><button className="fill preview-btn">Go to project</button></Link>
        <a href={github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
        <a href={live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>
      </div>
    </div>
  )
}

export default ProjectPreview
