import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    /**title: 'Vision',
    paragraph:'The world of Metagotchi!'**/
  };

  const ImageBox = {
    background:'url("./Frame (3).png")',
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
    <div className="container" style={{
      height: '1px',
      background: "black"
    }}> </div>
      <div className="container">
        <div className={innerClasses} id="VisionBox" style={{
        }}>
          <SectionHeader data={sectionHeader} className="center-content" id="Vision" />
          
          <div className={splitClasses} id="Vision">
          <Image
              src={require('./../../assets/images/headings/Roadmap.png')}
              alt="Roadmap!"
              width = {'69.69%'}
              height = {'50%'}
              style={{marginBottom: '32px',
              marginLeft: 'auto',
              marginRight: 'auto'}}
              />
            <div className="split-item">
              <div className='split-item-content center-content-mobile reveal-from-left' data-reveal-container=".split-item" style={ImageBox}>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Stage One
                  </div>
                <h3 className="mt-0 mb-12">
                  Community Building & Initial Collection
                  </h3>
                <p className="m-0">
                Building an inspired and vibrant community in preparation for our initial Genesis Metagotchi collection featuring impressive utilities and a long-term vision for Metagotchi. 
                <br></br>
                <br></br>
                The project will additionally complete a $50,000 charitable donation via a community voting system upon release of our genesis collection.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Roadmap/S1.gif')}
                  alt="Roadmap part 1"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item" style={ImageBox}>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Stage Two
                  </div>
                <h3 className="mt-0 mb-12">
                Staking, Game Development, Expansion
                  </h3>
                <p className="m-0">
                Development and release of our unique interactive staking system and beginning development of our first ever play to earn game. 
                <br></br> 
                <br></br>
                This will bring rewarding utility to our NFT’s whilst expanding our team and community to great heights. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Roadmap/S2.gif')}
                  alt="Roadmap part 2"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" style={ImageBox}>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                Stage Three
                  </div>
                <h3 className="mt-0 mb-12">
                Second Collection, First P2E Game Release
                  </h3>
                <p className="m-0">
                With an awesome start to utility we’ll release our second NFT collection in line with our first play to earn video-game. 
                <br></br>
                <br></br>
                80% of the revenue will be released to genesis collection holders.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Roadmap/S3.gif')}
                  alt="Roadmap part 3"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" style={ImageBox}>
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              Stage Four
                </div>
              <h3 className="mt-0 mb-12">
              Metaverse Development Begins
                </h3>
              <p className="m-0">
              Development of our comprehensive Metaverse begins with further continued expansion of our team and community. 
              <br></br>
              <br></br>
              Additional development will continue in our initial P2E game with updates and maintenance.
                </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/Roadmap/4.gif')}
                alt="Roadmap part 4"
                width={528}
                height={396} />
            </div>
          </div>

          <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" style={ImageBox}>
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              Stage Five
                </div>
              <h3 className="mt-0 mb-12">
              Metaverse Release
                </h3>
              <p className="m-0">
              Stage five will be our grand release of the Metaverse game and bring us to the conclusion of our initial roadmap. 
              <br></br>
              <br></br>
              The plans from here are vast and never ending, but it's important to have an ending to a chapter so a new one can begin. 
              <br></br>
              <br></br>
              At this stage we will have achieved our initial goals and will be able to continue building the Metagotchi vision and brand.
                </p>
            </div>
            <div className={
              classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
              )}
              data-reveal-container=".split-item">
              <Image
                src={require('./../../assets/images/Roadmap/S5.gif')}
                alt="Roadmap part 4"
                width={528}
                height={396} />
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;