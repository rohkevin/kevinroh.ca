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
              <p className="subtitle1 italic">"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin."</p>
              <p className="subtitle1">Mother Teresa</p>
            </div>
          </div>
        </section>

        <section className="page about-container">
          <div className="max-width">
            <p className="body1">Hello! My name is Kevin and I have a lot of fun creating things on the internet. My interest for web development started back in 2008 when journaling on the web consisted of 30 minutes of writing and 3 hours of making it look good.</p>
            <br/>
            <p className="body1">Fast forward to today, I've had the privilege of creating multiple accessible and inclusive web applications for clients and friends. I love the unique challenges that come with each project, and every hair-pulling moment that results in  rewarding outcomes.</p>
            <br/>
            <p className="body1">Currently I am working on a range of projects including:</p>
            <ul>
              <li>Guess Who online game with chat feature using SocketIO</li>
              <li>E-commerce platform for a client's online clothing brand</li>
              <li>Learning Typescript</li>
            </ul>
            <br/>
            <p className="body1">Outside of work I am an aspiring solo sky-diver, an around-the-world backpacker*, and an apostle for good-vibes. My father taught me from a young age to live life from as many perspectives as possible. My goal is to witness what was left behind by generations, and that comes with knowing the people of today, and what connects us for who we are. Every day I strive to be a part of history that leaves a positive impact for the future!</p>
            <br/>
            <p className="body1">Look around and feel free to drop a message or email me at <a href="mailto:kevinrohmail@gmail.com" className="email-link" title="kevinrohmail@gmail.com">kevinrohmail@gmail.com</a>.</p>
            <br/>
            <p className="body1"><span onClick={openContact} className="highlight">Get in touch</span></p>
            <br/>
            <p style={{fontSize: '0.8rem', color: 'var(--url-link-color)'}}>*Let me know if you have travel tips for Australia or Peru!</p>
            <br/>

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
