import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
//import SectionHeader from './partials/SectionHeader';
//import Image from '../elements/Image';

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
  /*
  const sectionHeader = {
    title: 'Vision',
    paragraph:'Put text here'
  }; */

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

            </div> 
            <div className="tiles-item reveal-from-bottom">

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