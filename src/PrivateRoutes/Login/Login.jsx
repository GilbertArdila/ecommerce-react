import React from 'react'
import { Button } from '../../Components'
import './Login.css'
const Login = () => {
    return (

        <div className="login">
            <div className="form-container">
                <img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <form action="/" className="form" />
                <label htmlFor="email" className="label">Email address</label>
                <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />

                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />

                
                <Button text={'Log in'} 
                styles={'primary-button login-button'}
                type={'submit'}/>

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