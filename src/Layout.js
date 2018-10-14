import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from './components/layout/Header.js'
// import Page from './components/layout/Page.js'

// Pages
import RisicoIndicatie from './pages/RisicoIndicatie.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'

// General CSS
import 'sanitize.css';
import './scss/index.scss';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/" component={RisicoIndicatie}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default Layout;
