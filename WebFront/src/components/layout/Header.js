import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Image from '../elements/Image';

// button references
import Home from './../../assets/images/buttons/CCHome.png'
import HomePressed from './../../assets/images/buttons/CCHomePressed.png'
import Button1 from './../../assets/images/buttons/CCButton1.png'
import Button1Pressed from './../../assets/images/buttons/CCButton1Pressed.png'


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: true,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);
  const nav = useRef(null);
  const hamburger = useRef(null);
  const burger = useRef(null);

  const [toggleHome, setToggledHome] = React.useState(false);
  const [toggleButton1, setToggledButton1] = React.useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  // Bad way to do this (for the right hand buttons)
  const toggleHomeImage = async() =>
  {
    setToggledHome(!toggleHome);
    await delay(1000);
    setToggledHome(toggleHome)
  }

  const toggleButton1Image = async() =>
  {
    setToggledButton1(!toggleButton1);
    await delay(1000);
    setToggledButton1(toggleButton1); 
  }

  //wrapper functions for the right hand side buttons
  const home = () =>
  {
    toggleHomeImage();
    closeMenu();
  }

  const button1 = () =>
  {
    toggleButton1Image();
    closeMenu();
  }
  
  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }


  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 500 + 'px';
    burger.current.style.background = 'url("./Frame (4).png")';
    burger.current.style.backgroundSize = "100% 100%";
    burger.current.style.backgroundPosition = 'center';
    setIsactive(true);
  }  

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    burger.current.style.background = null;
    setIsactive(false);
    //toggleImage();
  }


  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();

  } 

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );
  
  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                
                <div className="header-nav-inner" ref={burger}>
                  <ul className={
                    classNames(
                      `list-reset`
                    )}>
                    <div className="spacer">

                    </div>  
                    <Link to={{ pathname: "http://www.google.com.au" }} target="_blank" onClick={home}>
                      {!toggleHome &&  
                      <Image
                        src={require('./../../assets/images/buttons/CCHome.png')}
                        alt="Open"
                        width={32}
                        height={32} />
                      }
                      
                      {toggleHome &&
                        <Image
                        src={require('./../../assets/images/buttons/CCHomePressed.png')}
                        alt="Open"
                        width={32}
                        height={32} />
                      }
                      </Link>
                  </ul>
                  <ul className={
                    classNames(
                      `list-reset header-nav-right`
                    )}>
                      <Link to="#0" onClick={home}> 
                        {!toggleHome &&
                        <Image
                        src={require('./../../assets/images/buttons/CCHome.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      
                        {toggleHome &&
                        <Image
                        src={require('./../../assets/images/buttons/CCHomePressed.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      </Link>
                  </ul>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
 