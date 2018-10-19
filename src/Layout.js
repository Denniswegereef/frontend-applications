import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Header from './components/layout/Header.js'
import Home from './pages/Home.js'

// Pages
import RisicoIndicatie from './pages/RisicoIndicatie.js'
import Contact from './pages/Contact.js'

// General CSS
import 'sanitize.css';
import './scss/index.scss';

const Layout = () => (<Router>
  <React.Fragment>
    <Header/>
    <Route exact path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/risico-indicatie" component={RisicoIndicatie}/>
  </React.Fragment>
</Router>)

export default Layout;
