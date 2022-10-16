import React,{ useContext,useState} from 'react';
import { useHistory,Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { Button } from '../../Components';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const{addToLogin}=useContext(AppContext);
    const history=useHistory();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    
   
   
    const handleSubmit = () => {
       
		
		
        if(mail===''|| password===''){
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
			userMail:mail,
			userPassword:password 
		}
       
        addToLogin(data);
        history.push('/');
    }
        
	}


    return (

        <div className="login">
            <div className="form-container">
                <img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <form  className="form" />

                <label htmlFor="email" className="label">Email address</label>
                <input
                 type="text"
                 name="email"
                 placeholder="email@example.com"
                 className="input input-email"
                 value={mail}
                 onChange={(e)=>setMail(e.target.value)}
                 />

                <label htmlFor="password" className="label">Password</label>
                <input type="password"
                 name="password"
                  placeholder="*********"
                 className="input input-password" 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                />

                
                <Button text={'Log in'} 
                styles={'primary-button login-button'}
                type={'button'}
                onClick={handleSubmit}
                />

                <Link to="/recovery-password">Forgot my password </Link>
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