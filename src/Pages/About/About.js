import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import './About.scss'

// Photos are 5 x 4
const kevimg = process.env.PUBLIC_URL + '/assets/Images/DesktopVersion/kevin-desktop.jpg'
const kevams = process.env.PUBLIC_URL + '/assets/Images/DesktopVersion/kevinatamsterdam.JPG';
const kevsev = process.env.PUBLIC_URL + '/assets/Images/DesktopVersion/kevinatsevilla.JPG'
const kevgra = process.env.PUBLIC_URL + '/assets/Images/DesktopVersion/kevinatgranada.jpg'


function About() {
  const { setPageName, openContact } = useGlobalContext();
  useEffect(()=>setPageName('About'));
  
  return (
    <main className='page-nomargin'>
        <section className="about-header">
          <figure>
            <img src={kevimg} alt="Kevin" />
          </figure>
          <div className="page">
            <div className="max-width about-description">
              <h1>About Kevin</h1>
              <p className="subtitle1 italic">"The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is."</p>
              <p className="subtitle1">C. S. Lewis</p>
            </div>
          </div>
        </section>

        <section className="page about-container">
          <div className="max-width">
            <p className="body1">An aspiring solo sky-diver, good-vibes enthusiast, and an all-around-the-world backpacker, I strive to see life from as many perspectives as possible.</p>
            <br/>
            <p className="body1">My love for life translates directly into my daily works. Whether it was engineering solutions to manufacturing problems, to currently programming functionally exceptional applications, every project is an opportunity to learn something new.</p>
            <br/>
            <p className="body1">Daily I am reminded on the wealth of knowledge left behind by what others have built to date. On this small but beautiful planet, I am grateful to have the opportunity to contribute to better-ing our world. Today gives another chance to be a part of unending change, and to relentlessly chase our dreams so they become reality.</p>
            <br/>
            <p className="body1">Look around and feel free to drop a message!</p>
            <br/>
            <p className="body1"><span onClick={openContact} className=" highlight">Get in touch</span></p>

          </div>
        </section>

        <section className="about-container">
          <div className="max-width about-photos">
            <figure>
              <img src={kevams} alt="Bikes and canals"/>
            </figure>

            <figure>
              <img src={kevgra} alt="At the Alhambra in Granada, Spain"/>
            </figure>
        
            <figure>
              <img src={kevsev} alt="Plaza de Espana "/>
            </figure>
          </div>
        </section>

      </main>
  )
}

export default About
