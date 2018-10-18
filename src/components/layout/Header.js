import React from 'react';
import {NavLink} from "react-router-dom";

import '../../scss/header.scss';

import home from '../../images/home-icons/home.svg';
import calculator from '../../images/home-icons/calculator.svg';
import mail from '../../images/home-icons/mail.svg';

const Header = () => {
  return (<header className="header">
    <div className="header-user">
      {
        `Kind
        veilig
        thuis`
      }
    </div>
    <div className="header-navigation">

      <ul>
        <li>
          <NavLink exact="exact" to="/">
            <img src={home}/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/risico-indicatie">
            <img src={calculator}/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <img src={mail}/>
          </NavLink>
        </li>
      </ul>
    </div>
  </header>)
}

export default Header
