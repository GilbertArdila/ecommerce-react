import React from 'react';
import { Header } from '../../Components';
import {ProductList} from '../../Containers'
const Home = ({login}) => {
  return (
    <>
     <Header login={login} />
     <ProductList/>
    </>
   
    
      
    
  )
}

export  {Home}