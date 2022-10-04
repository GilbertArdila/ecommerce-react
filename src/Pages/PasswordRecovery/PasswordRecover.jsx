import React from 'react';
import { Button } from '../../Components';
import './PasswordRecover.css';

const PasswordRecover = () => {
  return (
    <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" className="input input-email" />
					<Button styles={'primary-button login-button'}
					text={'Confirm'}
					type={'submit'}/>
					
				</form>
			</div>
		</div>
  )
}

export { PasswordRecover}