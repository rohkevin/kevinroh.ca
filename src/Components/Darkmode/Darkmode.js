import React from 'react'
import { useGlobalContext } from '../../context'
import './Darkmode.scss'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

function Darkmode() {
  const { darkMode, toggleDarkMode } = useGlobalContext();

  return (
    // <div className="dark-mode">
    //   <input type="checkbox" onChange={toggleDarkMode} />
    //   <label className={darkMode ? "toggle show-dark" : "toggle"}></label>
    // </div>
    <button onClick={toggleDarkMode} className="button">
      {darkMode ? <FaRegMoon /> : <FiSun />}
    </button>
  )
}

export default Darkmode
