import React from 'react'
import './Darkmode.scss'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { useThemeContext } from '../../themeContext'

function Darkmode() {
  const { darkMode, setDarkMode } = useThemeContext();

  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
      setDarkMode(false);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
      setDarkMode(true);
    }
  }

  return (
    // <button onClick={toggleDarkMode} className="button">
    //   {darkMode ? <FaRegMoon className="moon"/> : <FiSun className="sun"/>}
    // </button>
    <button
      className={theme === 'dark' ? clickedClass + ' button' : 'button'}
      id="darkMode"
      aria-label="Dark mode toggle button"
      onClick={(e) => switchTheme(e)}
    >{ darkMode ? <FaRegMoon className="moon"/> : <FiSun className="sun"/> }</button>
  )
}

export default Darkmode
