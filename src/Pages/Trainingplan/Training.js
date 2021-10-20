import React from 'react';
import guy from '../../images/training/guy.png'
import './Training.css'
import Slide from 'react-reveal/Slide';


const Training = () => {
  return (
    <div className='mb-5'>
      <div className="row training-container m-0 p-0">
        <div className="col-lg-8 col-sm-12 text-center ">
        <Slide left>

          <div className='mt-5 text-white'>
          <h1>GET TRAINING TODAY</h1>
          <p>You want to get fit. But you don't want to join a health club <br /> your schedule has been too manic for you to get away.</p>
          </div>
          <button className='btn btn-outline-danger text-white fw-bold w-25'>contact now</button>
          </Slide>

        </div>
        <div className="col-lg-4 col-sm-12 text-center">
        <Slide right>
          <img className='w-50' src={guy} alt="" />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Training;