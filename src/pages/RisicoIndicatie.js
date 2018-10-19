import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";

import Categories from '../components/risicoIndicatie/Categories.js'
import QuestionForm from '../components/risicoIndicatie/QuestionForm.js'
import Calculation from '../components/risicoIndicatie/Calculation.js'

import '../scss/risico-indicatie/layout.scss'

class RisicoIndicatie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: this.props.location.pathname.split("/").pop(),
      calculation: null
    };
  }

  handleCalculation = (category, weight) => {
    if (weight) {

      let currentValue = Number(weight.replace(",", "."))

      this.setState({
        calculation: currentValue
      })
    }
  }

  handleParams = (param, name) => {
    console.log(name)
    this.setState({currentState: param, name: name})
  }

  render() {
    let match = this.props.match

    return (<div className="risico-indicatie">
      <div className="risico-indicatie-header">
        <Calculation calculation={this.state.calculation}/>
      </div>
      <div className="risico-indicatie-content">
        <Categories match={match} handleParams={this.handleParams}/>
        <Route exact path={`${match.path}/:category_name`} render={() =>< QuestionForm
          currentParam = {
            this.state.currentState
          }
          currentName = {
            this.state.name
          }
          handleCalculation = {
            this.handleCalculation
          } />}/>
      </div>
    </div>)
  }
}

export default withRouter(RisicoIndicatie)
