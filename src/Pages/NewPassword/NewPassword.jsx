import React,{useState,useContext,useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Components';
import { AppContext } from '../../Context/AppContext';
import Swal from 'sweetalert2';
import './index.css';

const NewPassword
 = () => {
    const history=useHistory()
    const [password, setPassword] = useState('');
    const [NEWpASSWORD, setNEWpASSWORD] = useState('');
    const {state}=useContext(AppContext);
    const {login}=state;

    useEffect(() => {
        login.length!==1?history.push('/'):null
      }, [])
   

    const handleSubmit=()=>{
        if(password==='' || NEWpASSWORD===''){
            Swal.fire({
                title: 'Por favor llena todos los campos',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }else{
            history.push('/')
        }

    }
    return (
        <div className="new-password
        ">
            <div className="form-container"><img src="logo_yard_sale.svg" alt="logo" className="logo" />

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for yue account</p>
                <form  className='form'><label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" name="new-password" placeholder="*********" className="input input-password" value={NEWpASSWORD} onChange={(e)=>setNEWpASSWORD(e.target.value)} />
                    <Button styles={'primary-button login-button'}
                    text={'Confirm'}
                    type={'button'}
                    onClick={handleSubmit}
                    />
                    
                </form>
            </div>
        </div>



    )
}

export { NewPassword
 }