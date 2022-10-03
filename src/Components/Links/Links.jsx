import React from 'react';
import './index.css';

const Links = ({to,text}) => {
  return (
    
    <li  >
    <a href={to}>{text}</a>
    </li>


  )
}

export  {Links}