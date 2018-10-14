import React, { Component } from 'react';

import Inputs from '../components/risicoIndicatie/Inputs.js'
import Catagories from '../components/risicoIndicatie/Catagories.js'
import Calculation from '../components/risicoIndicatie/Calculation.js'

import '../scss/calculator.scss';

  class RisicoIndicatie extends Component {
    render() {
      return (
        <div className="calculator">
          <Catagories/>
          <Inputs/>
          <Calculation/>
        </div>
      )
    }
}

export default RisicoIndicatie
