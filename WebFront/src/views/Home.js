import React from 'react';
import Hero from '../components/sections/Hero';
import background from '../assets/images/background2.png'
import Footer from '../components/layout/Footer';

const Home = () => {
  return(
      <div style = {{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize :"100% 100%"
        }}>  
        <Hero/>
        <Footer />
        </div>
  );}

export default Home;