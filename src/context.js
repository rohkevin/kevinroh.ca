import React, { useContext, useState, useEffect } from 'react'
import {social, projects} from './tempdata'
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [socialData, setSocialData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({});

  // When live, this needs to be changed to a fetch for data
  // isLoading is set to return "Loading..." in Layout.js
  
  // Get items stored in localStorage at reload
  useEffect(()=>{
    const projectStorage = localStorage.getItem('project');
    if (projectStorage) {
      setProject(JSON.parse(projectStorage));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('project', JSON.stringify(project));
  }, [project])
  
  useEffect(() => {
    setIsLoading(true);
    setSocialData(social);
    setProjectsData(projects);
    setIsLoading(false);
  }, []);


  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  const openContact = () => {
    setContactModal(true);
  }
  const attachName = (str) => {
    return str.replace(/\s/g, '').replace(/,/g,'').replace(/\./g,'')
  }
  return (
    <AppContext.Provider
      value={{
        isLoading, setIsLoading,
        sidenavOpen, setSidenavOpen, toggleSidenav,
        contactModal, setContactModal, openContact,
        socialData,
        projectsData,
        attachName,
        project, setProject
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider }
