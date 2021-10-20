import React from 'react';
import './Experts.css'
import { Card, CardGroup, Container } from 'react-bootstrap';
import expert1 from '../../images/experts/expert1.png'
import expert2 from '../../images/experts/expert2.png'
import expert3 from '../../images/experts/expert3.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Experts = () => {
  return (
    <Container className='experts-container'>
      <h1 className='text-center fw-bold mb-5'><span 
      className='text-danger '>OUR</span> EXPERTS</h1>

      <div >
      <CardGroup className='text-center'>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert1} />
    <Card.Body>
      <Card.Title>Patrick Cortez</Card.Title>
      <p className='text-danger'>Leader</p>
      <Card.Text>
      Patrick Cortez Very affordable, and totally flexible with the options to stack and combine one to one personal training with group fitness classes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert2} />
    <Card.Body>
      <Card.Title>Patrick Cortez</Card.Title>
      <p className='text-danger'>Gym coach</p>
      <Card.Text>
      Patrick Cortez is an American personal trainer best known for his work with professional athletes and celebrities.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
  <Card className='m-1'>
    <Card.Img variant="top" src={expert3} />
    <Card.Body>
      <Card.Title>Walter Wagner</Card.Title>
      <p className='text-danger'>Dance trainer</p>
      <Card.Text>
      Walter Wagner is a Venezuelan-American professional Latin dance specialist and World Mambo Champion
      </Card.Text>
    </Card.Body>
    <Card.Footer>
                <div className="icons-container d-flex justify-content-center">
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon text-info">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon text-danger">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon text-primary">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
    
    </Container>
  );
};

export default Experts;