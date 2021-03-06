import { useState } from 'react';
import initialState from '../initialState';


const useInitialState = () => {
  const [state, setState] = useState(initialState);




  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    
    addToBuyer,
    state,
  };
};

export default useInitialState;
