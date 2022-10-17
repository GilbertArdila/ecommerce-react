import React from 'react';
import { useHistory,Link } from 'react-router-dom';
import { Button } from '../../Components';
import './index.css';

const SendEmail = () => {
	const history=useHistory();
  return (
    <div className="SendEmail">
			<div className="form-container">
				<img src="logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src="email.svg" alt="email" />
				</div>
				<Button styles={'primary-button login-button'}
				text={'Login'}
				type={'button'}
				onClick={()=>history.push('/login')}
				/>
				
				<p className="resend">
					<span>Didn't receive the email?</span>
					<Link to="/recovery-password">Resend</Link>
				</p>
			</div>
		</div>
  )
}

export { SendEmail}