import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import Logo from './partials/Logo';
//import FooterNav from './partials/FooterNav';
//import FooterSocial from './partials/FooterSocial';

function useHover() {
  const [hovering, setHovering] = useState(false);
  const onHoverProps =
  {
    onMouseEnter: () => {
      setHovering(true);
    },
    onMouseLeave: () => setHovering(false),
  }

  return [hovering, onHoverProps]
}

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  const [buttonAisHovering, buttonAHoverProps] = useHover()

  return (
    <footer
      {...props}
      className={classes}

    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <div className="footer-copyright"{... buttonAHoverProps}> {!buttonAisHovering ? "This project was made by Reid Industries. All rights reserved" : 
            "UwU"} </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;