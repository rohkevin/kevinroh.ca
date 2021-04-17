import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
function ProjectPreview({name, img, description, stack}) {
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
          <FaGithub className="preview-icons" />
          <FaExternalLinkAlt className="preview-icons" />
        </div>
    </div>
  )
}

export default ProjectPreview
