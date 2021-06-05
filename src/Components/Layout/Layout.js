import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'

import Contact from '../Contact/Contact'
import Darkmode from '../Darkmode/Darkmode'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Sidenav from '../Sidenav/Sidenav'
import './Layout.scss'

function Layout({ children }) {
  const {isLoading, windowSize, handleOutsideClick, leisureModal, closeLeisure} = useGlobalContext();

  useEffect(() => {

      if (windowSize > 800) {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav").style.top=0;
          } else {
            document.getElementById("nav").style.top='-70px';
          }
          prevScrollpos = currentScrollPos;
          if (leisureModal) {
            closeLeisure();
          }
        }
  
      } else {
        window.onscroll = function() {
          document.getElementById("nav").style.top=0;
        }
      }
  }, [windowSize, leisureModal])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="layout-container" >
      <div id="nav" className="layout-side-top">
        <Navbar />
        <Sidenav />
        <Darkmode />
      </div>
      <div className="layout-side-bottom">
        <Contact />
      </div>


      <div className="layout-children" onClick={handleOutsideClick} >
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout
