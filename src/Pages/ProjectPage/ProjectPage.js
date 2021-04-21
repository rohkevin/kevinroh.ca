import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import { useParams } from 'react-router'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectPage.scss'

import Loading from '../../Components/Loading'

const ProjectPage = () => {
  
  const { projectsData, project, setProject, setIsLoading, attachName } = useGlobalContext();
  const { projectName } = useParams();

  useEffect(()=>{
    setIsLoading(true);
    if (projectsData){
      const pageProject = projectsData.find((data)=> attachName(data.name) === projectName);
      setProject(pageProject);
      localStorage.setItem('project', JSON.stringify(pageProject));
    } else {
      <h2>No Projects</h2>
    }
    setIsLoading(false);
  },[])


  if (!project) {
    return <Loading/>
  } else {
    return (
      <main className="page" id="project-page">
        <h1 className="h2">{project.name}</h1>
        <div className="project-summary">
          <p className="subtitle1 stack">{project.stack}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>
  
        </div>
        <p className="subtitle1">{project.summary}</p>
        {/* Image Carousel? */}
        {/* <img src={`/assets/Images${img}`}></img> */}
        
        {/* {description.map((line, index)=>(
          <Fragment key={`descriptionline${index}`}>
            <p className="body1">{line}</p><br/>
          </Fragment>))} */}
      </main>
    )

  }

};

export default ProjectPage
