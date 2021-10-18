import React from 'react';
import { Card } from 'react-bootstrap';

const Membership = () => {
  return (
    <div>
      <div className="container">
      <div className="row ">
      <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='bg-danger text-white fw-bold'>BASIC</Card.Header>
          <Card.Body>
          <h2 className='fs-1'>$17 <span className='fs-6'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p>12 months</p>
          <p>Personal trainer</p>
          <p>00 person</p>
          <p>Amount of people</p>
          <p>01 person</p>
          <p>Number of visits</p>
          <p>Unlimited</p>
          <button className='btn btn-outline-danger'>start now</button>
          </Card.Body>
          </Card>
    </div> 
      <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='bg-danger text-white fw-bold'>BASIC</Card.Header>
          <Card.Body>
          <h2 className='fs-1'>$17 <span className='fs-6'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p>12 months</p>
          <p>Personal trainer</p>
          <p>00 person</p>
          <p>Amount of people</p>
          <p>01 person</p>
          <p>Number of visits</p>
          <p>Unlimited</p>
          <button className='btn btn-outline-danger'>start now</button>
          </Card.Body>
          </Card>
    </div> 
      <div className='col-sm-12 col-md-6 col-lg-4 '>
        <Card className='text-center my-2' border="dark" style={{ width: '18rem' }}>
          <Card.Header className='bg-danger text-white fw-bold'>BASIC</Card.Header>
          <Card.Body>
          <h2 className='fs-1'>$17 <span className='fs-6'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p>12 months</p>
          <p>Personal trainer</p>
          <p>00 person</p>
          <p>Amount of people</p>
          <p>01 person</p>
          <p>Number of visits</p>
          <p>Unlimited</p>
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