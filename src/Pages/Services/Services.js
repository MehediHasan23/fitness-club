import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';



import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  // const {services} = useProvContext()
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data =>setServices(data))
  },[])


  return (
    <div className='m-0 mt-5'>
      
      <Container>
           
         <div> <h1 className='text-center fw-bold mb-5'><span className='text-danger '>OUR</span> SERVICES</h1></div>
          <div className='row'>
            {
              services.map(service=><Service 
              
              key={service.id}
              service = {service}
              ></Service>)
            }
          </div>
      </Container>
    </div>
  );
};

export default Services;



