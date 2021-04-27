import React, { useContext, useState, useEffect } from 'react'
import {social, projects} from './tempdata'
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [pageName, setPageName] = useState(null);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [socialData, setSocialData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize',checkSize);
    }
  },[])
  
  useEffect(() => {
    document.title = pageName;
  }, [pageName])

  // When live, this needs to be changed to a fetch for data
  // isLoading is set to return "Loading..." in Layout.js
  
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
        pageName, setPageName,
        windowSize,
        isLoading, setIsLoading,
        sidenavOpen, setSidenavOpen, toggleSidenav,
        contactModal, setContactModal, openContact,
        socialData,
        projectsData,
        attachName,
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
