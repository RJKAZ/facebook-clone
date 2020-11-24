// first out imports, the Context API stuff and the hooks
import React, {  createContext, useContext, useReducer } from 'react';

// This is preparing the data layer
export const StateContext = createContext();

// this is what is called a higher order component , we are using this to wrap our app. This allows us to have a State prodivder and then wraps the app within it. 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// we then use this hook to take data from it
export const useStateValue = () => useContext(StateContext);