import React from 'react';
import { Button } from '../../Components';
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
         <Button 
         styles={'secondary-button my-account-button'}
         text={'Edit'}
         type={'submit'}/>
       
      </form>
    </div>
  </div>
  )
}

export  {MyAccount}