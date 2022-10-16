import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Links = ({to,text}) => {
  return (
    
    <li  >
    <Link to={to}>{text}</Link>
    </li>


  )
}

export  {Links}