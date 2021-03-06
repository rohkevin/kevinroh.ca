import React, { Fragment, useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import { Link, useParams } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft } from 'react-icons/fa'
import './ProjectPage.scss'

import Loading from '../../Components/Loading'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

const ProjectPage = () => {
  const { setPageName, projectsData, setIsLoading, attachName } = useGlobalContext();
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const pageProject = projectsData.find((data)=> attachName(data.name) === projectName);
    setProject(pageProject);
    setIsLoading(false);
  }, [projectsData, projectName, attachName, setIsLoading])
  
  useEffect(()=> {
    if (project) {
      setPageName(project.name.charAt(0).toUpperCase() + project.name.slice(1));
    }
  }, [project, setPageName])

  if (!project) {
    return <Loading/>
  } else {
    const { id, name, stack, github, live, summary, sliderImages, description } = project;
    return (
      <main id="project-page">
        <div className="max-width">
          <div className="non-media">
            <Link to="/works" className="back-to"><FaChevronLeft /><p className="url-link">Back to Works</p></Link>
            <h1 className="h2">{name}</h1>

            <div className="project-subheader">
              <p className="subtitle1 stack">{stack}</p>
            </div>
            <div className="project-subheader">
              <a href={github} target="_blank" rel="noopener noreferrer" ><FaGithub className="preview-icons" /></a>
              <a href={live} target="_blank" rel="noopener noreferrer" ><FaExternalLinkAlt className="preview-icons" /></a>

            </div>
            <p className="subtitle1 summary">{summary}</p>
          </div>

          <ImageSlider id={id} projectName={projectName} sliderImages={sliderImages} />

          <div className="non-media">
            {
              description.map((section)=> {
                const { sectionTitle, content } = section;
                return (
                  <div key={`${id}-${sectionTitle}`} className="description-section-container">
                    <p className="h5">{sectionTitle}</p>
                    {content.map((line, index) => (
                      <p key={`${id}-${sectionTitle}-content-${index}`} className="body1 description-line">{line}</p>
                    ))}
                    {section.list && (
                      <ol>
                        {section.list.map((listItem, index) => <li key={`${sectionTitle}-listItem-${index}`} className="body1">{listItem}</li>)}
                      </ol>
                    )}
                  </div>
                )
              })
                
              
            }
          </div>
          {/* <div className="non-media">
            {
              description.map((line, index)=>(
              <Fragment key={`descriptionline${index}`}>
                <p className="body1">{line}</p><br/>
              </Fragment>))
            }
          </div> */}

        </div>
      </main>
    )

  }

};

export default ProjectPage
