import React from 'react'
import { useGlobalContext } from '../../context'
import './About.scss'
import kevimg from '../../Images/DesktopVersion/kevin-desktop.jpg'
import kevams from '../../Images/DesktopVersion/kevinatamsterdam.JPG'
import kevsev from '../../Images/DesktopVersion/kevinatsevilla.JPG'
import kevgra from '../../Images/DesktopVersion/kevinatgranada.jpg'
// Photos are 5 x 4
function About() {
  const { openContact } = useGlobalContext();
  return (
    <main>
      <section className="about-header">
        <figure>
          <img src={kevimg} alt="Kevin" />
        </figure>
        <div className="page">
          <h1>About Kevin</h1>
          <p className="subtitle1">The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.</p>
          <p className="subtitle1">C. S. Lewis</p>
        </div>
      </section>

      <section className="page about-container">
        <p className="body1">An aspiring solo sky-diver, good-vibes enthusiast, and an all-around-the-world backpacker, I strive to be see life from as many perspectives possible.</p>
        <br/>
        <p className="body1">My love for life translates directly into my daily works. Whether it was engineering solutions to manufacturing problems, to currently programming functionally exceptional applications, every project is an opportunity to learn something new. </p>
        <br/>
        <p className="body1">Daily I am reminded on the wealth of knowledge left behind by what others have built to date. On this small but beautiful planet, I am grateful to have the opportunity to contribute to better-ing our world. Today gives another chance to be a part of unending change, and to relentlessly chase our dreams so they become reality.</p>
        <br/>
        <p className="body1">Look around and feel free to drop a message!</p>
        <br/>
        <span onClick={openContact} className=" highlight">Get in touch</span>
      </section>

      <section className="about-container">
        <figure>
          <img src={kevams} alt="Bikes and canals"/>
        </figure>

        <figure>
          <img src={kevgra} alt="At the Alhambra in Granada, Spain"/>
        </figure>
    
        <figure>
          <img src={kevsev} alt="Plaza de Espana "/>
        </figure>
    
      </section>

      </main>
  )
}

export default About
