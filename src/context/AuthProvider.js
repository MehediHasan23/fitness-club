import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from './../hooks/useServices'

export const allContext = createContext()



const AuthProvider = ({children}) => {
  const services = useServices()
 const firebase = useFirebase()
  
  const data ={
    services,
    firebase
  }
 
  return (
    <allContext.Provider value={data} >
      {children}
    </allContext.Provider>
  );
};

export default AuthProvider;