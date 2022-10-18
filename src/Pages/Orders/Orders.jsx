import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import './index.css';
import { Order } from '../../Components';
import { Link } from 'react-router-dom';

const Orders = () => {
  const history=useHistory();
  const { addToCategorySearch}=useContext(AppContext);

  const handleClick=()=>{
    addToCategorySearch('');
    history.push('/');
  }

  return (
    <div className="my-order">
    <div className="my-order-container">
      <h1 className="title">My orders</h1>

      <div className="my-order-content">

       <Order/>
       <div onClick={handleClick}>◀ Regresar</div>

       

        
       
      </div>
    </div>
  </div>
  )
}

export  {Orders}