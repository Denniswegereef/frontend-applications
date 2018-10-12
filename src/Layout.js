import React, { Component } from 'react';
import './scss/App.css';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from './components/layout/Header.js'
// import Page from './components/layout/Page.js'

// Pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default Layout;
