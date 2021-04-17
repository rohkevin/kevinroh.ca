import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  const openContact = () => {
    setContactModal(true);
  }
  return (
    <AppContext.Provider
      value={{
        sidenavOpen, setSidenavOpen, toggleSidenav,
        contactModal, setContactModal, openContact
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
