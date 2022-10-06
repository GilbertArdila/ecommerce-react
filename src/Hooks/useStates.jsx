import React, { useState } from 'react'

const useStates = () => {

    const [login,setLogin]=useState([]);
  return {
    login,
    setLogin
  };
}

export  {useStates}