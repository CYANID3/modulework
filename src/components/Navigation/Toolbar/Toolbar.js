import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationList from "../NavigationList/NavigationList";

const Toolbar = () => {
  return (

        <header className="Toolbar">
        <Logo/>
        <nav>
          <NavigationList/>
        </nav>
      </header>  
  );
};

export default Toolbar;
