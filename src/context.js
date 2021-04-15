import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  return (
    <AppContext.Provider
      value={{
        sidenavOpen, setSidenavOpen, toggleSidenav,
        openContact, setOpenContact
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
