import React,{useState} from 'react';

const initialState={
    cart:[]
}

const UseInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart=(payload)=>{
        setState({
            ...state,
            cart:[...state.cart,payload]
        });
    }


  return {
    state,
    addToCart
  }
}

export  {UseInitialState}