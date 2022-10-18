import React,{useContext,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Button } from '../../Components';
import { AppContext } from '../../Context/AppContext';
import './index.css';

const MyAccount = () => {
  const {state}=useContext(AppContext);
  const {login}=state;
  const history=useHistory();

  useEffect(() => {
    login.length!==1?history.push('/'):null
  }, [])
  
  return (
    <div className="my-account">
      <div className="form-container">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">Camila Yokoo</p>

            <label htmlFor="email" className="label">Email</label>
            <p className="value">camilayokoo@gmail.com</p>

            <label htmlFor="password" className="label">Password</label>
            <p className="value">*********</p>
          </div>
          <Button
            styles={'secondary-button my-account-button'}
            text={'Edit'}
            type={'submit'} />
            <Link className='change-password' to={'new-password'}>Change password</Link>

        </form>
      </div>
    </div>
  )
}

export { MyAccount }