import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationList.css';

const NavigationList = () => {
  return (
      <ul className="NavigationItems">
        <li className="NavigationItem">
          <NavLink to="/" exact>Главная</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/news">Новости</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/add">Добавить</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
      </ul>
  );
};

export default NavigationList;
