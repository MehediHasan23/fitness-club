import React from 'react';
import { Carousel } from 'react-bootstrap';
import picOne from '../../images/hero-bg.png'
import picTwo from '../../images/rsz_background-min.png'
import picThree from '../../images/rsz_pic3-min.png'

const Header = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picOne}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picTwo}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={picThree}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Header;