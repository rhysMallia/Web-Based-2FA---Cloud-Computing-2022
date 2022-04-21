import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import background from "../assets/images/Background.svg";

const Home = () => {

  return (
    <div style = {{
      backgroundImage: `url(${background})`,
      //backgroundColor: '#8eeeff' 
    }}>
      <Hero/>
      <FeaturesTiles />
      <FeaturesSplit/> 
      <Testimonial topDivider />
      <Cta split />
    </div>
  );
}

export default Home;