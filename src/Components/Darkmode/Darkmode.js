import React from 'react'
import { useGlobalContext } from '../../context'
import './Darkmode.scss'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

function Darkmode() {
  const { darkMode, toggleDarkMode } = useGlobalContext();

  return (
    <button onClick={toggleDarkMode} className="button">
      {darkMode ? <FaRegMoon className="moon"/> : <FiSun className="sun"/>}
    </button>
  )
}

export default Darkmode
