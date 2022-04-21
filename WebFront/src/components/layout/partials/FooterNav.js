import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import{browserName } from 'react-device-detect';

let check = browserName;

//eslint-disable-next-line
if(check == "Mobile Safari")
{
  check = ":)";
}
const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

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

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0" onClick={scrollToHome}>Home</Link>
        </li>
        <li>
          <Link to="#0" onClick={scrollToVision}>Vision</Link>
        </li>
        <li>
          <Link to="#0" onClick={scrollToTeam}>Meet The Team</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;