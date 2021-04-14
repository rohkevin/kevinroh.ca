import React from 'react'
import Contact from '../Contact'
import Darkmode from '../Darkmode/Darkmode'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav/Sidenav'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Darkmode />
      <Sidenav />
      <Contact />

      <div>
        { children }
      </div>

    </div>
  )
}

export default Layout
