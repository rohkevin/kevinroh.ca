import React from 'react'
import {FiPlus} from 'react-icons/fi'
import { useGlobalContext } from '../../context'
import './Contact.scss';

function Contact() {
  return (
    <button id="contact-btn">
      <FiPlus/>
    </button>
  )
}

export default Contact
