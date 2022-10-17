import React,{useState}from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Components';
import Swal from 'sweetalert2';

import './PasswordRecover.css';

const PasswordRecover = () => {
	const history=useHistory();
	const [email, setEmail] = useState('');

	const handleConfirm=()=>{
		email===''?
		Swal.fire({
			title: 'Por favor ingresa la dirección de correo de tu cuenta',
			showClass: {
			  popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
			  popup: 'animate__animated animate__fadeOutUp'
			}
		  }):history.push('send-email')
	}
  return (
    <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Password recovery</h1>
				<p className="subtitle">Inform the email address used to create your account</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input 
					type="text" 
					id="email" 
					className="input input-email"
					value={email}
					onChange={(e)=>setEmail(e.target.value)}/>
					<Button styles={'primary-button login-button'}
					text={'Confirm'}
					type={'button'}
					onClick={handleConfirm}
					/>
					
				</form>
			</div>
		</div>
  )
}

export { PasswordRecover}