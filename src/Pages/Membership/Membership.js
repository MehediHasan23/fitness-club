import React from 'react';
import { Card } from 'react-bootstrap';

const Membership = () => {
  return (
    <div>
      <div className="container">
      <div className="row ">
      <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='text-white fw-bold' style={{background:'tomato'}} >BASIC</Card.Header>
          <Card.Body>
          <h2 ><span className='fs-1' style={{color:'tomato'}}>$17</span><span className='fs-6 text-muted'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p className='fw-bold'>12 months</p>
          <p className='text-muted'>Personal trainer</p>
          <p className='fw-bold'>00 person</p>
          <p className='text-muted'>Amount of people</p>
          <p className='fw-bold'>01 person</p>
          <p className='text-muted'>Number of visits</p>
          <p className='fw-bold'>Unlimited</p>
          <button className='btn btn-outline-danger'>start now</button>
          </Card.Body>
          </Card>
    </div> 
    <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='text-white fw-bold' style={{background:'tomato'}} >STANDARD</Card.Header>
          <Card.Body>
          <h2 ><span className='fs-1' style={{color:'tomato'}}>$17</span><span className='fs-6 text-muted'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p className='fw-bold'>12 months</p>
          <p className='text-muted'>Personal trainer</p>
          <p className='fw-bold'>00 person</p>
          <p className='text-muted'>Amount of people</p>
          <p className='fw-bold'>01 person</p>
          <p className='text-muted'>Number of visits</p>
          <p className='fw-bold'>Unlimited</p>
          <button className='btn btn-outline-danger'>start now</button>
          </Card.Body>
          </Card>
    </div> 
    <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='text-white fw-bold' style={{background:'tomato'}} >PREMIUM</Card.Header>
          <Card.Body>
          <h2 ><span className='fs-1' style={{color:'tomato'}}>$17</span><span className='fs-6 text-muted'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p className='fw-bold'>12 months</p>
          <p className='text-muted'>Personal trainer</p>
          <p className='fw-bold'>00 person</p>
          <p className='text-muted'>Amount of people</p>
          <p className='fw-bold'>01 person</p>
          <p className='text-muted'>Number of visits</p>
          <p className='fw-bold'>Unlimited</p>
          <button className='btn btn-outline-danger'>start now</button>
          </Card.Body>
          </Card>
    </div> 
        
      </div>
      </div>
    </div>
  );
};

export default Membership;