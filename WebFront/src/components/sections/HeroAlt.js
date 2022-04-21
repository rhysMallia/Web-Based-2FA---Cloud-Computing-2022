import React /*, { useState }*/ from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
//import ButtonGroup from '../elements/ButtonGroup';
//import Button from '../elements/Button';
import Image from '../elements/Image';
//import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  /** 
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   **/

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" style={{maxWidth:'1150px'}}>
        <div className={innerClasses} id="Home">  
          <div className="hero-content">
            <div id="wrapper" style={{
              display:'flex'
              }}> 
              <div style={{
              }}>
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
                  <Image
                  src={require('./../../assets/images/Logo/Mascot.gif')}
                  alt="Full logo"
                  width={900}
                  height={150} />
                </h1>
              </div>
              <div>
                <div style={{
                }}>
                  <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="300">
                  <Image
                  src={require('./../../assets/images/Logo/Text-Logo.png')}
                  alt="Full logo"
                  width={800}
                  height={100} />
                  </h1>
                </div>
                <div className="split-item-content center-content-mobile"style={{
                  background:'url("./Text-Frame3.png")',
                  backgroundSize :"cover",
                  backgroundPosition :'center',
                  backgroundRepeat: 'no-repeat',
                  margin: '5%',
                  marginTop:'6%',
                  paddingTop: "10%",
                  paddingBottom: '10%',
                  paddingLeft: '4%',
                  paddingRight: '4%'
                }}>
                  <h3 className="mt-0 mb-12 reveal-from-bottom" data-reveal-delay="600">
                  THE PROJECT
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="800">
                  Born from the hearts of the inspired, Metagotchis act as your companion to accompany you through your journey in web3. Your Metagotchi will always be there on your shoulder, through thick and thin, building a forever bond. 
                  </p>
                  <h4 className="mt-0 mb-12 reveal-from-bottom" data-reveal-delay="600">
                  OUR MISSION
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="800">
                  The Metagotchi mission is to bridge the gap between the real world and the NFT niche and create a vibrant community that can continue to grow and expand with the project whilst innovating and challenging the NFT status quo. 
                  </p>
                  <h4 className="mt-0 mb-12 reveal-from-bottom" data-reveal-delay="600">
                  OUR VALUES
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="800">
                  Multiple passive income streams can be gained from investing, staking, and ownership!
                  </p>
                  <h4 className="mt-0 mb-12 reveal-from-bottom" data-reveal-delay="600">
                  ABOUT THE TEAM
                  </h4>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="800">
                  Dedicated alpha, events, IRL meetups, giveaways and more for those who hold!
                  </p>
                </div>
              </div>
          </div>
            <div className="container-xs">
              <p></p>
              <p></p>
              <div className="reveal-from-bottom" data-reveal-delay="600">

              </div>
            </div>
          </div>
        </div>
        <div className="container-sm">
        
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;