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
    /**
     *              background:'url("./Frame (2).png")',
              backgroundSize :"100% 100%",
              objectFit: 'cover',
              backgroundPosition :'center',
              backgroundRepeat: 'no-repeat', 
     * 
     * 
     * 
     * 
     
      */             
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses} id="Home">  
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <Image
              src={require('./../../assets/images/Logo/Full-Logo_Animated.gif')}
              alt="Full logo"
              width={896}
              height={504} />
            </h1>
            <div className="split-item-content center-content-mobile"style={{
              borderWidth: '20%',
              borderStyle: 'solid',
              borderImage: 'url("./Frame (2).png")',
              borderImageSlice: '80% 45%',
              borderImageRpeat:'stretch',
              borderImageWidth: '100%',
              margin: '8%',
              marginTop:'32%',
              paddingTop: "8%",
              paddingBottom: '10%',
              paddingLeft: '4%',
              paddingRight: '4%'
            }}>      
              <div className="reveal-from-bottom" data-reveal-delay="600">
              <Image
              src={require('./../../assets/images/headings/About-Us2.png')}
              alt="About us!"
              style={{marginBottom: '32px'}}

              />
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Crash landed on earth after their planet was destroyed, the Gotchi's need your companionship to survive...
              </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Born from the hearts of the inspired, Metagotchis act as your companion to accompany you through your journey in web3. 
              <br></br>
              <br></br>
              Your Metagotchi will always be there on your shoulder, through thick and thin, building a forever bond. 
              </p>
              <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              OUR MISSION
              </h3>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              The Metagotchi mission is to bridge the gap between the real world and the NFT niche and create a vibrant community that can continue to grow and expand with the project whilst innovating and challenging the NFT status quo. 
              </p>
              <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Our Values
              </h3>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Strive for positive change
              </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Act with integrity and transparency
              </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Inspire innovation
              </p>
              <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              THE TEAM
              </h3>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              The Metagotchi team is built from some of the most inspired minds in web3. 
              <br></br>
              <br></br>
              Each individual member has the skills, the passion and the vision to take Metagotchi beyond all expectations
              </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;