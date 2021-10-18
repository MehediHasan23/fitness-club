import React from 'react';
import Header from '../../Shared/Header/Header';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Training from '../Trainingplan/Training';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Experts></Experts>
      <Training></Training>
      
    </div>
  );
};

export default Home;