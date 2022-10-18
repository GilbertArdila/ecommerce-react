import React from 'react';
import './index.css';

const Loader = () => {
  return (
    <div className='Loader-Product'>
        <div className="Loader-Product_image"></div>
        <div className="Loader-Product_infoContainer">
            <div className="Loader-Product_info"></div>
        <div className="Loader-Product_cart"></div>
        </div>
        
    </div>
  )
}

export  {Loader}