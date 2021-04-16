import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectPreview.scss'

function ProjectPreview() {
  return (
    <div className="preview-card">
      <Link to="/">
        <figure className="preview-pic"><img src="" alt="projectname"/></figure>
      </Link>
      <h5>Project Name 1</h5>
    </div>
  )
}

export default ProjectPreview
