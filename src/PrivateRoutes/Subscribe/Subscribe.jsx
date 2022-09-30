import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="form-container"><img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for yue account</p>
                <form action='/' className='form'><label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>



    )
}

export { Subscribe }