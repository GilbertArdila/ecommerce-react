import React,{useContext, useState} from 'react';
import { AppContext } from '../../Context/AppContext';
import { Button } from '../../Components';
import './Login.css';

const Login = () => {

    const [customMail, setCustomMail] = useState('');
    const [customPassword, setCustomPassword] = useState('');
    const{state}=useContext(AppContext);
   
    const handleSubmit = (event) => {
		event.preventDefault();
		 if(customMail===''|| customPassword===''){
            alert('Por favor ingresa tus credenciales');
        }
        else{
            const data = {
			userMail:customMail,
			userPassword: customPassword
		}
       
		state.loged.push(data)
        setCustomMail('');
        setCustomPassword('');
        location.replace('/');
    }
        
	}


    return (

        <div className="login">
            <div className="form-container">
                <img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <form action="/" className="form"/>

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

                <a href="/">Forgot my password</a>
                <form />

                <Button text={'Sing up'} 
                styles={'secondary-button signup-button'}
                type={'button'}/>
               
                
            
                    
                
                
            </div>
        </div>



    )
}

export {Login}