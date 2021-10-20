import React from 'react';
import { Card, Col, Form, Row , Button} from 'react-bootstrap';
import trainer from './../../images/trainer.png'
import faq from './../../images/faw.png'

const Membership = () => {
  return (
    <div>
      <div className="container purchase-container mt-5">
        <h1 className='text-center fw-bold mb-5' style={{color:'tomato'}}>PURCHASE A PLAN</h1>
      <div className="row align-items-center">
      <div className='text-center col-sm-12 col-md-6 col-lg-4'>
        <Card className='text-center my-2' border="danger" style={{ width: '19rem' }}>
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
          <button className='btn btn-outline-danger'>START NOW</button>
          </Card.Body>
          </Card>
      </div> 
      <div className='text-center col-sm-12 col-md-6 col-lg-4 '>
          <Card className='text-center my-2' border="danger" style={{ width: '19rem' }}>
          <Card.Header className='text-white fw-bold' style={{background:'tomato'}} >STANDARD</Card.Header>
          <Card.Body>
          <h2 ><span className='fs-1' style={{color:'tomato'}}>$37</span><span className='fs-6 text-muted'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p className='fw-bold'>12 months</p>
          <p className='text-muted'>Personal trainer</p>
          <p className='fw-bold'>03 person</p>
          <p className='text-muted'>Amount of people</p>
          <p className='fw-bold'>10 person</p>
          <p className='text-muted'>Number of visits</p>
          <p className='fw-bold'>Unlimited</p>
          <button className='btn btn-outline-danger'>START NOW</button>
          </Card.Body>
          </Card>
      </div> 
      <div className='text-center col-sm-12 col-md-6 col-lg-4 '>
        <Card className='text-center my-2' border="danger" style={{ width: '19rem' }}>
          <Card.Header className='text-white fw-bold' style={{background:'tomato'}} >PREMIUM</Card.Header>
          <Card.Body>
          <h2 ><span className='fs-1' style={{color:'tomato'}}>$377</span><span className='fs-6 text-muted'>/01 mo</span></h2>
          <p className='text-muted'>Duration</p>
          <p className='fw-bold'>12 months</p>
          <p className='text-muted'>Personal trainer</p>
          <p className='fw-bold'>07 person</p>
          <p className='text-muted'>Amount of people</p>
          <p className='fw-bold'>15 person</p>
          <p className='text-muted'>Number of visits</p>
          <p className='fw-bold'>Unlimited</p>
          <button className='btn btn-outline-danger'>START NOW</button>
          </Card.Body>
          </Card>
      </div> 
      {/* register now section  */}
      <div className="container register-section mt-5">
        
        <div className="row mt-5">
          <div className="col-lg-8 mt-5">
            <h1 className='register text-center '  style={{color:'tomato'}}>REGISTER NOW</h1>
            <p className='text-center'>The First 7 Day Trial Is Completely Free With The Teacher</p>
            <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
          </div>
          <div className="col-lg-4 my-5">
            <img className='img-fluid' src={trainer} alt="" />
          </div>
        </div>
      </div>
          
      </div>
            {/* faq section  */}
      </div>
      <div className="container mt-5 mb-5">
          <div className="row">
          <h1 className='text-center fw-bold my-5' style={{color:'tomato'}} >FAQ</h1>
            <div className="col-lg-6">
            
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          What personal trainer qualification do I need to work in the fitness industry?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
          If you would like to work as a group fitness instructor the minimum requirement is the SIS30315 Certificate 3 in Fitness Qualification.
          </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          What is the minimum age required to become a personal trainer?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">To commence your personal trainer certification studies you will need to be at least 15 years old.</div>
        </div>
        </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          How long will it take to complete the online Certificate 3 and Certificate 4 in Fitness?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Depending on your weekly time commitment to study, each qualification can take anywhere from 12 weeks to 52 weeks,</div>
          </div>
        </div>
      </div>
    </div>

            {/* img section  */}
            <div className="col-lg-6">
                <img className='img-fluid' src={faq} alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Membership;