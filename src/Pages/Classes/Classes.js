import React from 'react';
import img1 from '../../images/class/spic1.png'
import img2 from '../../images/class/spic2.png'
import img3 from '../../images/class/spic3.png'
import img4 from '../../images/class/spic4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock,} from '@fortawesome/free-solid-svg-icons'

const Classes = () => {
  return (
    <div>
      <div className='container mt-5 bg-light'>
        
        <div className="row p-2">
        <h1 className='text-center mb-5'><span className='text-danger'>OUR</span> CLASSES</h1>
        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h1>Fitness Class Name Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img1} alt="" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h1>Fitness Class Name Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>

        <div  className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img2} alt="" />
        </div>
        </div>

        {/* another section */}
        <div className="row mt-1 mb-5 ">
        <div className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img3} alt="" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h1>Fitness Class Name Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p  className='m-0 text-danger'> <FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>

        <div  className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img4} alt="" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h1>Fitness Class Name Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...</p>
          <p className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p className='m-0 text-danger'><FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
      <h1 className='text-center mb-5 fw-bold'>EXPERT <span className='text-danger'>TRAINERS</span></h1>
      
      </div>
      </div>
    </div>
  );
};

export default Classes;