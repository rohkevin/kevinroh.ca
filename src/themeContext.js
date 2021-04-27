import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode, setDarkMode, toggleDarkMode,
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
}
export { ThemeContext, ThemeProvider }