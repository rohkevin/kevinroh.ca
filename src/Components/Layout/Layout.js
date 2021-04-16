import React from 'react'
import Contact from '../Contact/Contact'
import Darkmode from '../Darkmode/Darkmode'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav/Sidenav'
import './Layout.scss'

function Layout({ children }) {
  
  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-side-top">
        <Sidenav />
        <Darkmode />
      </div>
      <div className="layout-side-bottom">
        <Contact />
      </div>

      <div className="layout-children">
        { children }
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
