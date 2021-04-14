import React from 'react'
import Contact from '../Contact'
import Navbar from '../Navbar'
import Sidenav from '../Sidenav/Sidenav'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <Contact />
      
      <div>
        { children }
      </div>

    </div>
  )
}

export default Layout
