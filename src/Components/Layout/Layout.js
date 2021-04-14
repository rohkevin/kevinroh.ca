import React from 'react'
import Contact from '../Contact/Contact'
import Darkmode from '../Darkmode/Darkmode'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav/Sidenav'
import './Layout.scss'

function Layout({ children }) {
  
  return (
    <div className="layout-container">
      <Navbar className="layout-navbar" />
      <div className="layout-side-container">
        <div className="layout-side-top">
          <Sidenav className="layout-sidenav" />
          <Darkmode className="layout-darkmode" />
        </div>
        <Contact className="layout-contact" />
      </div>

      <div className="layout-children">
        { children }
      </div>

    </div>
  )
}

export default Layout
