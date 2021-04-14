import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useGlobalContext } from '../../context'
import './Contact.scss';

function Contact() {
  const [openContact, setOpenContact] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleContactOpen = () => {
    setOpenContact(!openContact);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <button id="contact-btn" onClick={toggleContactOpen} className={openContact ? 'tilt-btn': null}><FiPlus/></button>
      <div className={openContact ? 'contact-form show-contact' : 'contact-form'}>
        <h1>Connect with me</h1>
        <p>Feel free to get in touch if you'd like to discuss work, share your stories, or debate on why "Let Me Love You" by Mario is the best R&B song up to date. Any constructive feedback is very much appreciated! You can also email me at: <span href="mailto:kevinrohmail@gmail.com">kevinrohmail@gmail.com</span></p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="contact-input"
            name="contact-name"
            placeholder="Name"
          />
          <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="contact-input"
            name="contact-email"
            placeholder="Email"
          />
          <textarea
            onChange={(e)=>setMessage(e.target.value)}
            className="contact-input"
            name="contact-message"
            placeholder="Message"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
