import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Image from '../elements/Image';

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

  //Button press animation TODO 
  const [toggledDiscord, setToggledDiscord] = React.useState(false);
  const [toggledTwitter, setToggledTwitter] = React.useState(false);
  const [toggledInstagram, setToggledInstagram] = React.useState(false);
  const [toggledTikTok, setToggledTikTok] = React.useState(false);
  
  const [toggledHome, setToggledHome] = React.useState(false);
  const [toggledVision, setToggledVision] = React.useState(false);
  const [toggledTeam, setToggledTeam] = React.useState(false);
  const [toggledWallet, setToggledWallet] = React.useState(false);

  const delay = ms => new Promise(res => setTimeout(res, ms));


  // SUCH A BAD WAY TO DO THIS!!!!
  const toggleDiscordImage = async() =>
  {
    setToggledDiscord(!toggledDiscord);
    await delay(1000);
   /**  setTimeout(function () 
    {
        setToggledDiscord(toggledDiscord)
    }, 5000); */
    setToggledDiscord(toggledDiscord);
  }

  const toggleInstagramImage = async() =>
  {
    setToggledInstagram(!toggledDiscord);
    await delay(1000);
    setToggledInstagram(toggledDiscord)
  }

  const toggleTikTokImage = async() =>
  {
    setToggledTikTok(!toggledTikTok);
    await delay(1000);
    setToggledTikTok(toggledTikTok)
  }

  const toggleTwitterImage = async() =>
  {
    setToggledTwitter(!toggledTwitter);
    await delay(1000);
    setToggledTwitter(toggledTwitter)
  }

  // Bad way to do this (for the right hand buttons)
  const toggleHomeImage = async() =>
  {
    setToggledHome(!toggledHome);
    await delay(1000);
    setToggledHome(toggledHome)
  }
  
  const toggleVisionImage = async() =>
  {
    setToggledVision(!toggledVision);
    await delay(1000);
    setToggledVision(toggledVision)
  }
  
  const toggleTeamImage = async() =>
  {
    setToggledTeam(!toggledTeam);
    await delay(1000);
    setToggledTeam(toggledTeam)
  }
  
  const toggleWalletImage = async() =>
  {
    setToggledWallet(!toggledWallet);
    await delay(1000);
    setToggledWallet(toggledWallet)
  }
  // wrapper functions
  const discord = () =>
  {
    closeMenu();
    toggleDiscordImage();
  }

  const instagram = () =>
  {
    closeMenu();
    toggleInstagramImage();
  }

  const tiktok = () => 
  {
    closeMenu();
    toggleTikTokImage();
  }

  const twitter = () =>
  {
    closeMenu();
    toggleTwitterImage();
  }

  //wrapper functions for the right hand side buttons
  const home = () =>
  {
    toggleHomeImage();
    scrollToHome();
    closeMenu();
  }

  const vision = () =>
  {
    toggleVisionImage();
    scrollToVision();
    closeMenu();
  }

  const team = () =>
  {
    toggleTeamImage();
    scrollToTeam();
    closeMenu();
  }

  const wallet = () =>
  {
    toggleWalletImage();
    //connectWallet();
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
  
  const scrollToVision = () =>
  {
    document.getElementById('Vision').scrollIntoView({behavior: "smooth"});
  }
  
  const scrollToTeam = () =>
  {
    document.getElementById('Team').scrollIntoView({behavior: "smooth"});
  }
  
  const scrollToHome = () =>
  {
    document.getElementById('Home').scrollIntoView({behavior: "smooth"});
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
                    <Link to={{ pathname: "http://www.discord.gg/metagotchi" }} target="_blank" onClick={discord}>
                      {!toggledDiscord &&  
                      <Image
                        src={require('./../../assets/images/Buttons/Discord.png')}
                        alt="Open"
                        width={32}
                        height={32} />
                      }
                      
                      {toggledDiscord &&
                        <Image
                        src={require('./../../assets/images/Buttons/Discord_Pressed.png')}
                        alt="Open"
                        width={32}
                        height={32} />
                      }
                      
                      </Link>


                    <Link to={{ pathname: "https://www.instagram.com/metagotchinfts/" }} target="_blank" onClick={instagram}>
                        {!toggledInstagram &&  
                          <Image
                          src={require('./../../assets/images/Buttons/Instagram.png')}
                          alt="Open"
                          width={32}
                          height={32} />
                      }
                      
                        {toggledInstagram &&
                          <Image
                          src={require('./../../assets/images/Buttons/Instagram_Pressed.png')}
                          alt="Open"
                          width={32}
                          height={32} />
                      }
                    </Link>
                      <Link to={{ pathname: "https://www.tiktok.com/@metagotchi" }} target="_blank" onClick={tiktok}> 
                        {!toggledTikTok &&  
                          <Image
                          src={require('./../../assets/images/Buttons/TikTok.png')}
                          alt="Open"
                          width={32}
                          height={32} />
                        }
                    
                        {toggledTikTok &&
                          <Image
                          src={require('./../../assets/images/Buttons/TikTok_Pressed.png')}
                          alt="Open"
                          width={32}
                          height={32} />
                        }
                      </Link>
                      <Link to={{ pathname: "https://twitter.com/MetagotchiNFTs" }} target="_blank" onClick={twitter}> 
                        {!toggledTwitter &&  
                        <Image
                        src={require('./../../assets/images/Buttons/Twitter.png')}
                        alt="Open"
                        width={32}
                        height={32} />
                        }
                  
                        {toggledTwitter &&
                        <Image
                        src={require('./../../assets/images/Buttons/Twitter_Pressed.png')}
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
                        {!toggledHome &&
                        <Image
                        src={require('./../../assets/images/Buttons/Home.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      
                        {toggledHome &&
                        <Image
                        src={require('./../../assets/images/Buttons/Home_Pressed.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      </Link>
                  </ul>
                  <ul className={
                    classNames(
                      `list-reset header-nav-right`
                    )}>
                      <Link to="#0" onClick={vision}> 
                        {!toggledVision &&
                        <Image
                        src={require('./../../assets/images/Buttons/Vision.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      
                        {toggledVision &&
                        <Image
                        src={require('./../../assets/images/Buttons/Vision_Pressed.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      </Link>
                  </ul>
                  <ul className={
                    classNames(
                       `list-reset header-nav-right`
                    )}>
                      <Link to="#0" onClick={team}> 
                        {!toggledTeam &&
                        <Image
                        src={require('./../../assets/images/Buttons/MeetTheTeam.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      
                        {toggledTeam &&
                        <Image
                        src={require('./../../assets/images/Buttons/MeetTheTeam_Pressed.png')}
                        alt="Open"
                        width={128}
                        height={60} />
                        }
                      </Link>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="#0" onClick={wallet}>
                          {!toggledWallet &&
                          <Image
                          src={require('./../../assets/images/Buttons/ConnectWallet.png')}
                          alt="Open"
                          width={128}
                          height={60} />
                          }
                        
                          {toggledWallet &&
                          <Image
                          src={require('./../../assets/images/Buttons/ConnectWallet_Pressed.png')}
                          alt="Open"
                          width={128}
                          height={60} />
                          }
                      </Link>
                      </li>
                    </ul>}
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
 