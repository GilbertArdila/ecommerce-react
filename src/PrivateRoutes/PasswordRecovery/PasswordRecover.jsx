import React from 'react';
import './PasswordRecover.css';

const PasswordRecover = () => {
  return (
    <div className="recover">
    <div className="form-container">
      <img src="logo_yard_sale.svg" alt="logo" className="logo"/>

      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <div className="email-image">
        <img src="email.svg" alt="email"/>
      </div>

      <button className="primary-button login-button">Login</button>

      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}

export { PasswordRecover}