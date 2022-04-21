import React from 'react';
//import React, { useRef, useState, useEffect} from "react";
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
//import ReactPlayer from "react-player";
//import JB from '../../assets/images/Team/JBNA.mp4';
//import IM from '../../assets/images/Team/IM.mp4';
//import SF from '../../assets/images/Team/SF.mp4';
//import RM from '../../assets/images/Team/RM.mp4';
//import MG from '../../assets/images/Team/MG.mp4';
//import MW from '../../assets/images/Team/MW.mp4';
//import { useEffect } from 'react/cjs/react.production.min';
//import{ isChromium, isMobile, browserName } from 'react-device-detect';
//const check = browserName;

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

/** 
const isSafari = () =>
{
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("Chrome") < 0;
} **/

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  /**  const videoParentRef = useRef();
  useEffect(() => {
    if (isSafari() && videoParentRef.current)
    {
      const player = videoParentRef.current.children[0];

      if(player)
      {
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;
        player.loop = true;
      }
    }
  });
              dangerouslySetInnerHTML={{
              __html: `
              <video
                loop
                muted
                autoplay
                playsinline
                preload="metadata"
              >
              <source src="./video/JBNA.mp4" type="video/mp4" />
              </video>`
            }}       
  
  
  
  **/



  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    /**title: 'The Team',
    paragraph: 'Meet the team who is putting together the Metagotchi experience.'**/
  };
  /**
   * 
   * 
   * 
   * <Image
                    src={require('./../../assets/images/Team/JB.gif')}
                    alt="Image of Jacob Breadnam" />
                
                  
                  \<iframe
                title="video"
                src= "/public/JB.mp4"
                frameBorder="0"
                allowFullScreen
              ></iframe> 
               <ReactPlayer url= {IM} width="100%" height="100%" 
                      playing={true} loop = {true} 
                      />


                                                <video autoPlay muted loop preload='auto' playsInline >
                            <source src={IM} type='video/mp4'></source>
                          </video>

                                    width = {'69.69%'}
          height = {'50%'}
   */



  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={tilesClasses} >
          <Image
          src={require('./../../assets/images/headings/The-Team.png')}
              alt="Roadmap!"
              width = {'69.69%'}
              height = {'50%'}
              style={{marginBottom: '32px',
              marginLeft: 'auto',
              marginRight: 'auto'}}
          />
            <div className="tiles-item reveal-from-right" data-reveal-delay="200" id="Team">
            <Image
            src={require('./../../assets/images/Team/JB.png')}
            alt="Image of Jacob Breadnam" />
            </div>

                      <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                      <div>
                      <Image
                      src={require('./../../assets/images/Team/IM.png')}
                      alt="Image of Isaac" />
                      </div>
                  </div>

                  <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                  <div>
                  <Image
                  src={require('./../../assets/images/Team/SF.png')}
                  alt="Image of Sonny" />
                  </div>
              </div>
                <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div>
                <Image
                src={require('./../../assets/images/Team/RM.png')}
                alt="Image of Rhys" />
                </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div>
                <Image
                src={require('./../../assets/images/Team/MG.png')}
                alt="Image of Monty" />
                </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div>
                <Image
                src={require('./../../assets/images/Team/MW.png')}
                alt="Image of Major" />
                </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container" style={{
        height: '1px',
        background: "black"
      }}> </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;