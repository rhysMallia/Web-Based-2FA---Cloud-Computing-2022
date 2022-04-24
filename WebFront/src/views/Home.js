import React from 'react';
import Hero from '../components/sections/Hero';
import background from '../assets/images/background.jpg'

const Home = () => {
  return(
      <div style = {{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize :"100% 100%"
        }}>  
        <Hero/>
        </div>
  );}

export default Home;