import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
//import ButtonGroup from '../elements/ButtonGroup';
//import Button from '../elements/Button';
import Image from '../elements/Image';
//import Modal from '../elements/Modal';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton,  LinkedinIcon, TumblrShareButton,   TumblrIcon,
TelegramIcon, TelegramShareButton, EmailIcon, EmailShareButton, RedditIcon, RedditShareButton,
WhatsappIcon, WhatsappShareButton, WeiboIcon, WeiboShareButton, HatenaShareButton, HatenaIcon,
LivejournalIcon, LivejournalShareButton } from 'react-share';
import { set } from 'lodash';

const axios = require('axios').default;
const sea = 'https://buyv1qn071.execute-api.ap-southeast-2.amazonaws.com/dev/search';
const reg = 'https://buyv1qn071.execute-api.ap-southeast-2.amazonaws.com/dev/register';
const ver = 'https://buyv1qn071.execute-api.ap-southeast-2.amazonaws.com/dev/verify';
const S1 = 1000;
const S3 = 3000;
const S5 = 5000;
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
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const[state, setState] = useState({
    username: "",
    token: "",
    shareString: "Test",
    hashtag: "Reid2FA",
  });
  //Display
  const[error, setError] = useState("");
  const[error2, setError2] = useState("");

  //components
  const[login, setLogin] = useState();
  const[signup, setSignup] = useState();
  const[verify, setVerify] = useState();
  const[share, setShare] = useState();

  //social media
  const url = "http://reid.industries";
  const hashtag = "Reid 2FA"

  //Changing state
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  //buttons
  const afterSubmitReg = e =>
  {
    e.preventDefault();
    sendRegistration();
  }

  const afterSubmitLog = e =>
  {
    e.preventDefault();
    sendSearch();
  }

  const afterSubmitVer = e =>
  {
    e.preventDefault();
    sendLogin();
  }

  //Wrappers
  function Login()
  {
    ClearHouse();
    setLogin(true);
    setSignup(false);
  }

  function SignUp()
  {
    ClearHouse();
    setLogin(false);
    setSignup(true);
  }
  
  //POST related
  async function userFound()
  {
    ClearHouse();
    setError("This user is already registered.");
    setState({username: ""});
    setError("");
    await delay(S1)
  }

  async function userFoundInDB()
  {
    setVerify(false);
    setError("User found in DB")
    await delay(S1)
    setVerify(true);
    setLogin(false);
    setError("");
  }

  async function userNotFoundInDB()
  {
    setError("User not found in DB")
  }

  async function sendToLogin()
  {

    setError2("User Verified! :)")
    await delay(S1)
    setState({token: ""})
  }

  async function badToken()
  {
    setVerify(false);
    setError2("User not verified! :(");
    await delay(S1)
    Login();
    setState({token: ""});
    setState({username: ""});
  }

  async function goodToken()
  {
    setVerify(false);
    setError2(state.username + " Verified.");
    await delay(S1);
    setShare(true);
    setState({token: ""});
    setState({username: ""});
  }
  //POST
  async function sendRegistration()
  {
    if(state.username !== "")
    {
      let data =
      {
        "user": state.username,
        "pass": "pass"
      }
      axios.post(reg, data).then(function(response)
      {
        if(response.data.user == "true")
        {
          userFound();
        }
        else
        {
          setError("Secret: " + response.data.secret)
          setVerify(true);
        }
      });
    }
  }

  async function sendSearch()
  {
    if(state.username !== "")
    {
      let data =
      {
        "user": state.username,
        "pass": "pass"
      }
      axios.post(sea, data).then(function(response)
      {
        if(response.data.user == "true")
        {
          userFoundInDB();
        }
        else
        {
          userNotFoundInDB();
          clearHouse(S1);
        }
      });
    }
  }
  
  async function sendLogin()
  {
    if(state.token !== "")
    {
      let data =
      {
        "user": state.username,
        "token": state.token,
        "pass": "pass"
      }
      axios.post(ver, data).then(function(response)
      {
        if(response.data.verified == "true")
        {
          goodToken();
        }
        else
        {
          badToken();
        }
      });
    }
  }

  //Misc
  async function clearHouse(timeout)
  {
    await delay(timeout)
    ClearHouse();
  }
  function ClearHouse()
  {
    setLogin(false);
    setSignup(false);
    setVerify(false);
    setShare(false);
    setError("")
    setError2("")
    setState({username: ""});
    setState({token: ""});
  }

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
      <div className="container-sm">
        <div className={innerClasses} id="Home">  
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            </h1>
            <div className="split-item-content center-content-mobile"style={{
              backgroundColor:"white",
              minHeight:"100%",
              minWidth: "100%"
            }}> 
              <div>
                <button onClick={Login}>
                  Login
                </button>
                
                <button onClick={SignUp}>
                  Register
                </button>
              </div>
              <div>
              {login &&
                <form onSubmit={afterSubmitLog}>
                  <label>
                  Username:
                  <input type="text" name="username" value={state.username} onChange={handleChange} />
                  </label> 
                  <input type="submit"/>
                </form>
              }

              {signup &&
                <form onSubmit={afterSubmitReg}>
                  <label>
                  Register
                  Username:
                  <input type="text" name="username" value={state.username} onChange={handleChange} />
                  </label> 
                  <input type="submit"/>
                </form>
              }
              <h5> {error} </h5>


              {verify &&
                <form onSubmit={afterSubmitVer}>
                  <label>
                  Token:
                  <input type="text" name="token" value={state.token} onChange={handleChange} />
                  </label> 
                  <input type="submit"/>
                </form>
              }
              <h5> {error2} </h5> 
              {share &&
                <div>
                
                <FacebookShareButton url={url} quote={state.shareString} hashtag={state.hashtag}>
                <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                
                <TwitterShareButton url={url} title={state.shareString} hashtag={state.hashtag}>
                <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <LinkedinShareButton url={url} title={state.hashtag} description={state.shareString} summary={'Reid 2Fa'}>
                <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <TumblrShareButton url={url} title={state.shareString} caption={state.shareString} posttype={'link'}>
                <TumblrIcon size={32} round={true}/>
                </TumblrShareButton>

                <TelegramShareButton url={url} title={state.shareString} >
                <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>

                <EmailShareButton subject={url} body={state.shareString}>
                <EmailIcon size={32} round={true}/>
                </EmailShareButton>

                <RedditShareButton url={url} title={state.shareString}>
                <RedditIcon size={32} round={true}/> 
                </RedditShareButton> 

                <WhatsappShareButton url={url} title={state.shareString} separator=":: ">
                <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>

                <WeiboShareButton url={url} title={state.shareString}> 
                <WeiboIcon size={32} round={true}/>
                </WeiboShareButton>

                <HatenaShareButton url={url} title={state.shareString}>
                <HatenaIcon size={32} round={true}/>
                </HatenaShareButton>

                <LivejournalShareButton url={url} title={state.shareString}>
                <LivejournalIcon size={32} round={true}/>
                </LivejournalShareButton>
                </div>
              }
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