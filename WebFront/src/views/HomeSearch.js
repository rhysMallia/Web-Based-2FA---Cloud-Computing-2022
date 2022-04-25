import React from 'react';
import HeroSearch from '../components/sections/HeroSearch';
import background from '../assets/images/background2.png'
import Footer from '../components/layout/Footer';

const HomeSearch = () => {
  return(
      <div style = {{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize :"100% 100%"
        }}>  
        <HeroSearch/>
        <Footer />
        </div>
  );}

export default HomeSearch;