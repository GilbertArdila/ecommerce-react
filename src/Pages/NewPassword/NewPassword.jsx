import React from 'react';
import { Button } from '../../Components';
import './index.css';

const NewPassword
 = () => {
    return (
        <div className="new-password
        ">
            <div className="form-container"><img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for yue account</p>
                <form action='/' className='form'><label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    <Button styles={'primary-button login-button'}
                    text={'Confirm'}
                    type={'button'}/>
                    
                </form>
            </div>
        </div>



    )
}

export { NewPassword
 }