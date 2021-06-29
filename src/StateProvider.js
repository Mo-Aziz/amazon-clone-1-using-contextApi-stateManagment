import React, { createContext, useContext, useReducer } from "react";

// prepare the dataLayer
export const StateContext = CreateContext();

//  Wrap our app and provide data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.provider>
);

// pull information from the data layer.

export const useStateValue = () => useContext(StateContext);
