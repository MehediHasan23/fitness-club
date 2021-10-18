import React from 'react';
import useProvContext from '../../../hooks/useProvContext';

const Login = () => {
  const {firebase} = useProvContext();
  const {signInWithGoogle, user, logOut} = firebase;
  return (
    <div>
      <button onClick={signInWithGoogle} className='btn btn-primary'>google sign in</button>
      <button onClick={logOut} className='btn btn-primary'>logOut</button>
      <h1>name:{user?.displayName}</h1>
    </div>
  );
};

export default Login;