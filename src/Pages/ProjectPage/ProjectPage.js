import React, { Fragment, useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import { Link, useParams } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft } from 'react-icons/fa'
import './ProjectPage.scss'

import Loading from '../../Components/Loading'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const { projectsData, setIsLoading, attachName } = useGlobalContext();
  const { projectName } = useParams();

  useEffect(()=>{
    setIsLoading(true);
    const pageProject = projectsData.find((data)=> attachName(data.name) === projectName);
    setProject(pageProject);
    setIsLoading(false);
  })

  if (!project) {
    return <Loading/>
  } else {
    const { name, stack, github, live, summary, imageMed, sliderImages, description } = project;

    return (
      <main className="page" id="project-page">
        <Link to="/works" className="back-to"><FaChevronLeft /><p className="url-link">Back to Works</p></Link>
        <h1 className="h2">{name}</h1>
        <div className="project-subheader">
          <p className="subtitle1 stack">{stack}</p>
          <a href={github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
          <a href={live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>
  
        </div>
        <p className="subtitle1 summary">{summary}</p>

        <img src={`/assets/Images${imageMed}`} alt={name}></img>
        <ImageSlider projectName={projectName} sliderImages={sliderImages} />

        {description.map((line, index)=>(
          <Fragment key={`descriptionline${index}`}>
            <p className="body1">{line}</p><br/>
          </Fragment>))}
      </main>
    )

  }

};

export default ProjectPage
