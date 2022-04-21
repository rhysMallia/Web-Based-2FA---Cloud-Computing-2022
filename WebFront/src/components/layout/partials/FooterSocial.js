import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  // button press animations
  const [toggledDiscord, setToggledDiscord] = React.useState(false);
  const [toggledTwitter, setToggledTwitter] = React.useState(false);
  const [toggledInstagram, setToggledInstagram] = React.useState(false);
  const [toggledTikTok, setToggledTikTok] = React.useState(false);
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

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
         <Link to={{ pathname: "http://www.discord.gg/metagotchi" }} target="_blank" onClick={toggleDiscordImage}>
            {!toggledDiscord &&  
            <Image
              src={require('./../../../assets/images/Buttons/Discord.png')}
              alt="Open"
              width={32}
              height={32} />
            }
            {toggledDiscord &&
              <Image
              src={require('./../../../assets/images/Buttons/Discord_Pressed.png')}
              alt="Open"
              width={32}
              height={32} />
            }
          </Link>
        </li>
        <li>
        <Link to={{ pathname: "https://www.instagram.com/metagotchinfts/" }} target="_blank" onClick={toggleInstagramImage}>
          {!toggledInstagram &&  
          <Image
          src={require('./../../../assets/images/Buttons/Instagram.png')}
          alt="Open"
          width={32}
          height={32} />
          }
      
          {toggledInstagram &&
          <Image
          src={require('./../../../assets/images/Buttons/Instagram_Pressed.png')}
          alt="Open"
          width={32}
          height={32} />
          }
          </Link>
          </li>
        <li>
        <Link to={{ pathname: "https://www.tiktok.com/@metagotchi" }} target="_blank" onClick={toggleTikTokImage}>
          {!toggledTikTok &&  
          <Image
          src={require('./../../../assets/images/Buttons/TikTok.png')}
          alt="Open"
          width={32}
          height={32} />
          }
          {toggledTikTok &&
          <Image
          src={require('./../../../assets/images/Buttons/TikTok_Pressed.png')}
          alt="Open"
          width={32}
          height={32} />
          }
      </Link>
        </li>
        <li>
        <Link to={{ pathname: "https://twitter.com/MetagotchiNFTs" }} target="_blank" onClick={toggleTwitterImage}> 
          {!toggledTwitter &&  
          <Image
          src={require('./../../../assets/images/Buttons/Twitter.png')}
          alt="Open"
          width={32}
          height={32} />
          }
          {toggledTwitter &&
          <Image
          src={require('./../../../assets/images/Buttons/Twitter_Pressed.png')}
          alt="Open"
          width={32}
          height={32} />
          }
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;