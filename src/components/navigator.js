import React from 'react'
import logo from './picture/reddit-logo-text.png'
import style from './navigator.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from './modal';
//import Form from './form';

function Navigator() {
  const navigate = useNavigate(); 

  // ---------- for the modal -----------------------------------------------
    const [signUp, setSignUp] = useState(false)
    const [logIn,setLogIn] = useState(false)

    const handelClickS = (() => {
    if(signUp === false) {setSignUp(true)}
    else {
      setSignUp(false)
    }
    }) 
  const handelClickL = (() => {
    if(logIn === false) {setLogIn(true)}
    else {
      setLogIn(false)
    }
    })

    const ChangeModal = (() => {
       if(signUp === true) {
         setLogIn(true)
        setSignUp(false)}else { 
          setLogIn(false)
          setSignUp(true)

        }
    })
  // -----------------------------------------------------------------------------
  return (
    <nav className='navigator'>
      <img className="logo" src={logo} onClick={() => navigate('/')}/>
      <input 
      className="input"
      placeholder='Search Reddit'
      />
      <button onClick={handelClickS}
      className="sign-up-btn"
      
      >Sign up</button>
      <Modal
      open={signUp}
      onClose={handelClickS}
      btnMessage="X"
      >
        <div className='signup-form'>
          <h3>Sign Up </h3>
          <span>By continuing, you are setting
             up a Reddit account and agree to our User
              Agreement and Privacy Policy. </span>
              <span><input type='checkbox'/> 
              I agree to get emails about cool stuff on Reddit </span>
              <div>Continue whit Google</div>
              <div>Continue whit Apple</div>
        <span>-------OR---------</span>
        <input
        placeholder='Email'/>
        <button>Continue</button>
        <span>Alredy a redditor? <button onClick={ChangeModal}>Log In</button></span>
        </div>
      </Modal>
      <button onClick={handelClickL}
      className="sign-up-btn"
      >Log in</button>
        <Modal
       open={logIn}
       onClose={handelClickL}
       btnMessage="X">
  <div className='login-form'>
          <h3>Log In </h3>
          <span>By continuing, you are setting
             up a Reddit account and agree to our User 
             Agreement and Privacy Policy. </span>
              <span><input type='checkbox'/> 
              I agree to get emails about cool stuff on Reddit </span>
              <div>Continue whit Google</div>
              <div>Continue whit Apple</div>
        <span>-------OR---------</span>
        <input
        placeholder='Username'/>
         <input
        placeholder='Password'/>
        <span>Forgot your username or password? </span>
        <button>Continue</button>
        <span>New to reddit? <button onClick={ChangeModal}>Sign Up</button></span>
       
        </div>
       </Modal>

    </nav>
  )
}

export default Navigator


