import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    //title: 'Mint your NFT today!',
    //paragraph:'Join the Metagotchi discord today and get access to the first whitelist!'
  };

  const ImageBox = {
    background:'url("./Frame (5).png")',
    backgroundSize :"100% 100%",
    objectFit: 'scale-down',
    backgroundPosition :'center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '3%',
    paddingRight: '3%'
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/Transparent.png')}
                      alt="Features tile icon 01"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Transparency
                    </h4>
                  <p className="m-0 text-sm">
                  Completely public, transparent, and trustworthy team
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/Innovation.png')}
                      alt="Features tile icon 02"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Innovation
                    </h4>
                  <p className="m-0 text-sm">
                  We encourage innovation in our team and community
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/Community.png')}
                      alt="Features tile icon 03"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Community 
                    </h4>
                  <p className="m-0 text-sm">
                  Driving growth and a vibrant atmosphere
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/GenesisCollection.png')}
                      alt="Features tile icon 04"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Genesis Collection
                    </h4>
                  <p className="m-0 text-sm">
                  A first chance to become an early investor in Metagotchi
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/CharityWork.png')}
                      alt="Features tile icon 05"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Charity Work
                    </h4>
                  <p className="m-0 text-sm">
                  Supporting those in need is a primary goal of our project
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <Image
                      src={require('./../../assets/images/StageIcons/GotchiToken.png')}
                      alt="Features tile icon 06"
                      width={96}
                      height={96} />
                  </div>
                </div>
                <div className="features-tiles-item-content" style={ImageBox}>
                  <h4 className="mt-0 mb-8">
                  Token
                    </h4>
                  <p className="m-0 text-sm">
                  Our own token to drive utility and create tangible growth
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;