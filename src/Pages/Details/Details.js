import React from 'react';
import { useParams } from 'react-router';
import {Card, Button, Container} from 'react-bootstrap'
import useProvContext from '../../hooks/useProvContext';
import { Link } from 'react-router-dom';
import './Details.css'


const Details = () => {
  const {detailId} = useParams();
 const {services} = useProvContext()
 const selectItem = services?.find(service => service.id === Number(detailId))
  console.log(services);
  return (
    <div>
      <Container className ='d-flex flex-wrap justify-content-center align-items-sm-center details'>

      <div>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={selectItem?.img} />
          <Card.Body className='text-center'>
          <Card.Title>{selectItem?.name}</Card.Title>
          <p className='m-0'>Trainer: {selectItem?.Trainer}</p>
            <p className='m-0'>Price: {selectItem?.price} $</p>
            <p>Rating: {selectItem?.rating}</p>
            <Card.Text>{selectItem?.desc}</Card.Text>
            <Link to='/home'><Button className='w-100' variant="primary">Gb Back</Button></Link>
          </Card.Body>
          </Card>
          </div>
      {/* <div >
      <>
        {
          selectItem?.email && 
         
        }
      </>
      </div> */}
    </Container>
    </div>
  );
};

export default Details;