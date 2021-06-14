import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import './ProjectPreview.scss'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { MdLightbulbOutline } from 'react-icons/md'
function ProjectPreview({ index, id, name, coverImage, summary, description, stack, github, live }) {
  const projectName = name.replace(/\s/g, '');
  const { windowSize } = useGlobalContext();


  const check = ((windowSize > 600 && index % 2 === 0) || windowSize < 600 || windowSize > 900);

  return (
    <div className="preview-card" data-aos="fade-up" data-aos-duration="1000">
      <Link 
        to={`/works/${projectName}`} 
        className="image-container"
        style={check ? {order: 1, marginRight: '2rem'} : {order: 2, marginRight: 0}}>
        <figure className="preview-pic">
          <img src={`${process.env.PUBLIC_URL}/assets/Images/Projects/${id}/${coverImage}`} alt={name} />
        </figure>
      </Link>
      <div 
        className="preview-description" 
        style={check ? {order: 2, marginRight: 0} : {order: 1, marginRight: '2rem'}}>
        <h1 className="h5"><Link to={`/works/${projectName}`} className="h5">{name}</Link></h1>
        <p className="subtitle2 preview-summary">{summary}</p>
        <p className="subtitle2 stack">{stack}</p>

        <div className="preview-icons-container">
          <Link to={`/works/${projectName}`}>
            <button className="fill preview-btn"
              ><MdLightbulbOutline style={{transform: 'scale(1.1)'}}/>Details
            </button>
          </Link>
          <a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fill preview-btn"
            ><FaExternalLinkAlt style={{transform: 'scale(0.85)'}}/>Live
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fill preview-btn"
            ><FaGithub />Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
