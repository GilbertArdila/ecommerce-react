import React,{ useState,useEffect} from 'react';
import { Button } from '../../Components';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    
   
    const [customMail, setCustomMail] = useState('');
    const [customPassword, setCustomPassword] = useState('');

    
   
   
    const handleSubmit = (e) => {
		e.preventDefault();
		 if(customMail===''|| customPassword===''){
            Swal.fire({
                title: 'Por favor ingresa tus credenciales',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
        else{
            const data = {
			userMail:customMail,
			userPassword: customPassword
		}
        setCustomMail('');
        setCustomPassword('');
        location.replace('/');
    }
        
	}


    return (

        <div className="login">
            <div className="form-container">
                <img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <form action="/" className="form" />

                <label htmlFor="email" className="label">Email address</label>
                <input
                 type="text"
                 id="email"
                 placeholder="email@example.com"
                 className="input input-email"
                 value={customMail}
                 onChange={(e)=>setCustomMail(e.target.value)} />

                <label htmlFor="password" className="label">Password</label>
                <input type="password"
                 id="password"
                  placeholder="*********"
                 className="input input-password" 
                 value={customPassword}
                 onChange={(e)=>setCustomPassword(e.target.value)}/>

                
                <Button text={'Log in'} 
                styles={'primary-button login-button'}
                type={'submit'}
                onClick={handleSubmit}
                />

                <a href="/recovery-password">Forgot my password</a>
                <form />

                <Button text={'Sing up'} 
                styles={'secondary-button signup-button'}
                type={'button'}
                
                />
               
                
            
                    
                
                
            </div>
        </div>



    )
}

export {Login}