import { Container } from 'react-bootstrap';
import useProvContext from '../../hooks/useProvContext';


import Service from '../Service/Service';
import './Services.css'

const Services = () => {
  const {services} = useProvContext()


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



