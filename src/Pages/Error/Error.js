import React from 'react';
import { Container } from 'react-bootstrap';
import './Error.css'
import errorImg from '../../images/error.png'

const Error = () => {
  return (
    <div>
      
        <img className='img-fluid' src={errorImg} alt="" />
      
      
    </div>
  );
};

export default Error;