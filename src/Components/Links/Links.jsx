import React,{useContext} from 'react';
import { AppContext } from '../../Context/AppContext';
import {Link} from 'react-router-dom';
import './index.css';

const Links = ({to,text,search}) => {
  const {addToCategorySearch}=useContext(AppContext);
 

  const handleClick=()=>{
    
    addToCategorySearch(search)
  }

  return (
    
    <li  >
    <Link to={to} onClick={handleClick}>{text}</Link>
    </li>


  )
}

export  {Links}