import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
function ProjectPreview({name, img, description, stack, github, live}) {
  let imgSrc=require('../../Images' + img);
  return (
    <div className="preview-card">
      <Link to="/">
        <figure className="preview-pic"><img src={imgSrc.default} alt={name} /></figure>
        <h5>{name}</h5>
      </Link>
      <p className="subtitle2">{description}</p>
      <p className="subtitle2 stack">{stack}</p>
      <div className="preview-icons-container">
        <a href={github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
        <a href={live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>
      </div>
    </div>
  )
}

export default ProjectPreview
