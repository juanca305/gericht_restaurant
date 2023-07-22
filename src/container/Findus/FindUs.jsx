import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';



const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info app__center-media'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '2rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>2423 Sw 102th Ave. Miami, Fl, 33165.</p>
        <p className='p__cormorant' style={{color: "#dcca87", margin:'2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00am - 02:00am</p>
        <p className='p__opensans'>Sat -Sun: 10am - 03:00am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
    
  </div>
);

export default FindUs;
