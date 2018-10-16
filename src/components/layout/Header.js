import React from 'react';
import { Link } from "react-router-dom";

import '../../scss/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-user">
        { `Kind veilig thuis | User ${Math.ceil(Math.random() * 100)}`}
      </div>
      <div className="header-navigation">

  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/risico-indicatie">category</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>

      </div>
    </header>
  )
}

export default Header
