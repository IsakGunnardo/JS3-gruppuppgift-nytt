import React from 'react'
import logo from './picture/reddit-logo-text.png'
import style from './navigator.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from './modal';
//import Form from './form';

function Navigator() {
  const navigate = useNavigate(); 
  
  const [isOpen,setIsOpen] = useState(false)


  return (
    <nav className='navigator'>
      <img className="logo" src={logo} onClick={() => navigate('/')}/>
      <input 
      className="input"
      placeholder='Search Reddit'
      />
      <button
      className="sign-up-btn"
      
      >Sign up</button>
      <button
      className="sign-up-btn"
      >Log in</button>
        <Modal
       open={isOpen}
       onClose={() => setIsOpen(false)}
      
      
       btnMessage="Stäng"></Modal>

    </nav>
  )
}

export default Navigator


