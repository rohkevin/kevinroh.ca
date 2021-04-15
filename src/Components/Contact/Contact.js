import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useGlobalContext } from '../../context'
import emailjs from 'emailjs-com'
import './Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {openContact, setOpenContact} = useGlobalContext();
  const toggleContactOpen = () => {
    setOpenContact(!openContact);
    setName('');
    setEmail('');
    setMessage('');
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2gpcaw7', 'template_4ndnlnz', e.target, 'user_6AFPNwufrS2CfylNiruzA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
  }
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('contact-form-mask')){
      setOpenContact(false);
    }
  }
  return (
    <>
      <button id="contact-btn" onClick={toggleContactOpen} className={openContact ? 'tilt-btn': null}><FiPlus/></button>
      <div className={openContact ? 'contact-form-mask show-mask' : 'contact-form-mask'} onClick={handleOutsideClick}>
        <div className={openContact ? 'contact-form show-contact' : 'contact-form'} >
          <h1>Connect with me</h1>
          <p>Feel free to get in touch if you'd like to discuss work, share your stories, or debate on why "Let Me Love You" by Mario is the best R&B song up to date. Any constructive feedback is very much appreciated! You can also email me at: <a href="mailto:kevinrohmail@gmail.com">kevinrohmail@gmail.com</a></p>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="contact-input"
              name="name"
              placeholder="Name"
            />
            <input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="contact-input"
              name="email"
              placeholder="Email"
            />
            <textarea
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className="contact-input"
              name="message"
              placeholder="Message"
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
