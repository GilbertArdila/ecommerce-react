import React from 'react';
import './index.css';

const MyAccount = () => {
  return (
    <div className="my-account">
    <div className="form-container">
      <h1 className="title">My account</h1>

      <form action="/" className="form">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <p className="value">Camila Yokoo</p>

          <label htmlFor="email" className="label">Email</label>
          <p className="value">camilayokoo@gmail.com</p>

          <label htmlFor="password" className="label">Password</label>
          <p className="value">*********</p>
        </div>

        <input type="submit" value="Edit" className="secondary-button my-account-button"/>
      </form>
    </div>
  </div>
  )
}

export  {MyAccount}