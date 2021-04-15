import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const toggleDarkMode = () => {
    // window.localStorage.setItem('theme', )
    setDarkMode(!darkMode)
  }
  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode, setDarkMode, toggleDarkMode,
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
