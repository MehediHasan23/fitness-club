import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Service = (props) => {
  const {name, img, desc, Trainer, id, rating, price} = props.service
  // console.log(props);
  return (
    <div className='col-sm-12 col-md-6 col-lg-4'>
    
    <div class="card mx-auto border m-2" style={{width: "18rem"}}>
    <img src={img} class="card-img-top" alt="..."/>
    </div>
    <div class="card-body  text-center">
    <h5 class="card-title">{name}</h5>
    <p><span className='text-warning'><FontAwesomeIcon icon={faUser} /> </span> Trainer:{Trainer}</p>
    <p>Price: {price} $</p>
    <Link to={`/details/${id}`}><Button className='btn btn-primary'>View Details</Button></Link>
  
    </div>
  
    </div>
  );
};

export default Service;

{/* <Card className='my-2' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <p> <span className='text-warning'><FontAwesomeIcon icon={faUser} /> </span> Trainer:{Trainer}</p>
        <p>Price: {price} $</p>
        <Link to={`/details/${id}`}><Button className='btn btn-primary w-100'>View Details</Button></Link>
        </Card.Body>
      </Card> */}