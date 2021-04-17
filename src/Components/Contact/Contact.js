import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { useGlobalContext } from '../../context'
import emailjs from 'emailjs-com'
import './Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState(false);

  const {contactModal, setContactModal} = useGlobalContext();
  const toggleContactOpen = () => {
    setContactModal(!contactModal);
    setName('');
    setEmail('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    if (name && email && message) {
      emailjs.sendForm('service_2gpcaw7', 'template_4ndnlnz', e.target, 'user_6AFPNwufrS2CfylNiruzA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }
  }
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('contact-form-mask')){
      setContactModal(false);
    }
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  },[success]);

  useEffect(()=>{
    document.body.style.overflowY="auto";
    if(contactModal){
      document.body.style.overflowY="scroll";
    }
  },[contactModal])

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setNameError(false);
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError(false);
    }
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setMessageError(false);
    }
  }

  return (
    <>
      <button id="contact-btn" onClick={toggleContactOpen} className={contactModal ? 'tilt-btn': null}><FiPlus/></button>
      <div className={contactModal ? 'contact-form-mask show-mask' : 'contact-form-mask'} onClick={handleOutsideClick}>
        <div className={contactModal ? 'contact-form show-contact' : 'contact-form'} >
          <FaTimes className="close" onClick={()=>setContactModal(false)}/>
          <h1 className="h4">Connect with me</h1>
          <p className="body2">Feel free to get in touch if you'd like to discuss work, share your stories, or debate on why "Let Me Love You" by Mario is the best R&B song up to date. Any constructive feedback is very much appreciated! You can also email me at: <a href="mailto:kevinrohmail@gmail.com" className="body2">kevinrohmail@gmail.com</a></p>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input 
              value={name}
              onChange={handleNameChange}
              className={nameError ? "contact-input error" : "contact-input"}
              name="name"
              placeholder="Tell me your name"
            />
            <input 
              value={email}
              onChange={handleEmailChange}
              className={emailError ? "contact-input error" : "contact-input"}
              name="email"
              placeholder="Enter your email address"
            />
            <textarea
              value={message}
              onChange={handleMessageChange}
              className={messageError ? "contact-input error" : "contact-input"}
              name="message"
              placeholder="What would you like to ask?"
            />
            <button type="submit" className={success ? "submit-btn success" : "submit-btn"}>{success ? "Sent!" : "Submit"}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
