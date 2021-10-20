import React from 'react';
import img1 from '../../images/class/spic1.png'
import img2 from '../../images/class/spic2.png'
import img3 from '../../images/class/spic3.png'
import img4 from '../../images/class/spic4.png'
import t1 from '../../images/class/t1.png'
import t2 from '../../images/class/t2.png'
import t3 from '../../images/class/t3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock,} from '@fortawesome/free-solid-svg-icons'

const Classes = () => {
  return (
    <div>
      <div className='container mt-5 bg-light'>
        
        <div className="row p-2">
        <h1 className='text-center mb-5 fw-bold'><span className='text-danger'>OUR</span> CLASSES</h1>
        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h3>Aerobic fitness</h3>
          <p> Aerobic activities condition your heart and lungs. Aerobic means "with oxygen." The purpose of aerobic conditioning is to increase the amount of oxygen that is delivered to your muscles, which allows them to work longer. </p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img1} alt="" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h3>Muscle strengthening</h3>
          <p>Stronger muscles can mean either more powerful muscles that can do bigger jobs (such as lifting heavier weights) or muscles that will work longer before becoming exhausted (endurance).</p>
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
        <h1>Flexibility</h1>
          <p>Like aerobic fitness and muscle strengthening, flexibility is a result of physical activity. Flexibility comes from stretching.</p>
          <p  className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p  className='m-0 text-danger'> <FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>

        <div  className="col-sm-12 col-md-6 col-lg-3 p-2">
          <img className='img-fluid' src={img4} alt="" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 text-center bg-white p-2">
        <h3>Balance Training</h3>
          <p>Some exercise helps improve your balance by helping you build up core strength. This is especially helpful for people who are at risk of falls, including the elderly</p>
          <p className='m-0 text-danger'><FontAwesomeIcon icon={faClock} />5:30 PM</p>
          <p className='m-0 text-danger'><FontAwesomeIcon icon={faCalendar} /> April 22, 2018</p>
          <button className="btn btn-danger mt-3">Join from $15</button>
        </div>
        </div>
      </div>
      <div className="container my-5">
      <div className="row">
      <h1 className='text-center mb-5 fw-bold'>EXPERT <span className='text-danger'>TRAINERS</span></h1>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <img className='w-75' src={t1} alt="" />
        <h3>Mellisa Howard</h3>
        <p>Gum Trainer</p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <img className='w-75' src={t2} alt="" />
        <h3>Mike Rechardson</h3>
        <p>Therapist</p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <img className='w-75' src={t3} alt="" />
        <h3>Chals White</h3>
        <p>Gum Trainer</p>
      </div>
      
      </div>
      </div>
    </div>
  );
};

export default Classes;