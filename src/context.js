import React, { useContext, useState, useEffect } from 'react'
import {social} from './tempdata'
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [socialData, setSocialData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // When live, this needs to be changed to a fetch for data
  // isLoading is set to return "Loading..." in Layout.js
  useEffect(() => {
    setIsLoading(true);
    setSocialData(social);
    setIsLoading(false);
  }, []);


  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  const openContact = () => {
    setContactModal(true);
  }
  return (
    <AppContext.Provider
      value={{
        isLoading, setIsLoading,
        sidenavOpen, setSidenavOpen, toggleSidenav,
        contactModal, setContactModal, openContact,
        socialData,
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
