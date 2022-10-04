import React,{useRef} from 'react'
import { Button } from '../../Components'
import './Login.css';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
        
	}


    return (

        <div className="login">
            <div className="form-container">
                <img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <form action="/" className="form" ref={form}  />

                <label htmlFor="email" className="label">Email address</label>
                <input type="text" name="email" placeholder="email@example.com" className="input input-email" />

                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input input-password" />

                
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

export { Login }