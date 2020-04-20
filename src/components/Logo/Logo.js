import React from 'react';
import SiteLogo from '../../assets/img/site_logo.svg';
import './Logo.css';

const Logo = () => {
  return (
      <div className="Logo">
        <img src={SiteLogo} alt="My Logo"/>
      </div>
  );
};

export default Logo;
