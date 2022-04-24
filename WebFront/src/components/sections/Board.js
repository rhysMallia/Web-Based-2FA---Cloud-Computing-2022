import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

// Constants (TODO MAKE THIS NOT BAD!)
const sea = "https://fyn3utzg51.execute-api.ap-southeast-2.amazonaws.com/dev/search";
//const reg =
//const verify =

const pass = "pass";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Board = ({
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

  /** useEffect to check contract information instantly on page load
  useEffect(() => {
    //checkMintPrice();
    checkSymbol();
    checkMinted();
    checkCollection();
    checkName();
    getConfig();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // check the contract information every minute
  setInterval(getConfig, MINUTE_MS / 3);
  setInterval(checkMinted, MINUTE_MS / 3);
  */
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-right" data-reveal-delay="200" id="Team">
            <Link to="#0" > 
            </Link>
            </div>

            <div>
            {displayWhitelist && <Link>
            <p> Please join our whitelist to mint </p>
            <Image
              src={require('./../../assets/images/Buttons/Twitter.png')}
              alt="Open"
              width={32}
              height={32} />
          </Link>}
          {!displayWhitelist && displayError && <Link>
            <p> Error! </p>
            <Image
              src={require('./../../assets/images/Buttons/Twitter.png')}
              alt="Open"
              width={32}
              height={32} />
          </Link>}
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

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;

export default Board;