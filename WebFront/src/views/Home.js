import React from 'react';
// import sections
//import React, { useRef, useState, useEffect} from "react";
import Hero from '../components/sections/Hero';
//import Hero from '../components/sections/HeroAlt'
//import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
//import Cta from '../components/sections/Cta';
import background from "../assets/images/Background_Animated_New.gif";
//import backgroundSafari from "../assets/images/Background.png";
import Footer from '../components/layout/Footer';
//import BG from './../assets/images/anim.mp4';
//import ReactPlayer from "react-player";
//import isMobileSafari from 'react-device-detect';
import browserName from 'react-device-detect';

//      <FeaturesTiles />
/**
 * 
 * 
 * 
 * 
 *    background: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize :"100% 100%",
      //display: 'inline-block'
      //backgroundColor: '#8eeeff' 


      <video autoPlay muted loop preload='auto' playsInline webkit-PlaysInLine style={{
      width: '100vw',
      height: '600vh',
      objectFit: 'fill',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      zIndex: "-1"
    }}>
      <source src={require('./../assets/images/anim.mp4')} type='video/mp4'></source>
      </video>
 * 
 * 
 */
/** 
const isSafari = () =>
{
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("Chrome") < 0;
  const [shouldUseVideo, setUseVideo] = useState(false);

  useEffect(() => {
    if (isSafari())
    {
          setUseVideo(false);
    }
    });



} **/






const Home = () => {
  let check = browserName;
  let checkBool = false;
  
  //eslint-disable-next-line
  if(check == 'Safari Mobile')
  {
      checkBool = true;
  }

  return checkBool ?
  (
    <div>
    <video autoPlay muted loop preload='auto' playsInline webkit-PlaysInLine style={{
      width: '100vw',
      height: '600vh',
      objectFit: 'fill',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      zIndex: "-1"
    }}>
      <source src={require('./../assets/images/anim.mp4')} type='video/mp4'></source>
      </video>
      
      <Hero/>
      <FeaturesSplit/>
      <Testimonial topDivider />
      <Footer />
      </div>
  ) :
  (
      <div style = {{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize :"100% 100%"
        }}>  
  
        <Hero/>
        <FeaturesSplit/> 
        <Testimonial topDivider />
        <Footer />
        </div>
  );
}

export default Home;