import Button from '@restart/ui/esm/Button';
import React from 'react';

import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


const Service = (props) => {
  const {name, img, Trainer, id,  price} = props.service
  // console.log(props);
  return (
    <Zoom>
      <div className='col-sm-12 col-md-6 col-lg-4'>
    
      <div  className="card mx-auto className='mb-0' border m-2" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body text-center m-0">
        <h5 className="card-title">{name}</h5>
        <p className='mb-0'><span className='text-warning'><FontAwesomeIcon icon={faUser} /> </span> Trainer:{Trainer}</p>
        <p className='mb-0'>Price: {price} $</p>
        <Link to={`/details/${id}`}><Button className='btn btn-primary w-100'>View Details</Button></Link>
      </div>
   </div>
  
    </div>
    </Zoom>
  );
};

export default Service;

  

//don't know why not working responsive those two cards :(

 /*      <div className="card mx-auto border m-2" style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    </div>
    <div className="card-body  text-center">
    <h5 className="card-title">{name}</h5>
    <p><span className='text-warning'><FontAwesomeIcon icon={faUser} /> </span> Trainer:{Trainer}</p>
    <p>Price: {price} $</p>
    <Link to={`/details/${id}`}><Button className='btn btn-primary'>View Details</Button></Link>
  
    </div> */



   /*  <Card className='my-2' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <p> <span className='text-warning'><FontAwesomeIcon icon={faUser} /> </span> Trainer:{Trainer}</p>
        <p>Price: {price} $</p>
        <Link to={`/details/${id}`}><Button className='btn btn-primary w-100'>View Details</Button></Link>
        </Card.Body>
      </Card> */