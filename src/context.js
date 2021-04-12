import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const toggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        sidenavOpen,
        toggleSidenav

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
