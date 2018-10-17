import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";

import Categories from '../components/risicoIndicatie/Categories.js'
import QuestionForm from '../components/risicoIndicatie/QuestionForm.js'
import Calculation from '../components/risicoIndicatie/Calculation.js'

import '../scss/risico-indicatie/layout.scss'

class RisicoIndicatie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: this.props.location.pathname.split("/").pop()
    };
  }

  componentDidMount() {
    // console.log(this.state.currentState)
  }

  handleCalculation = (number) => {
    console.log('FIRED G WITH ' + number)
  }

  handleParams = (param) => {
    this.setState({
      currentState: param
    })
  }

  render() {
    let match = this.props.match

    return (
      <div className="risico-indicatie">
        <div className="risico-indicatie-header">
          <Calculation/>
        </div>
        <div className="risico-indicatie-content">
          <Categories match={ match } handleParams={this.handleParams}/>
          <Route
            path={`${match.path}/:category_name`}
            render={()=><QuestionForm
            currentParam={this.state.currentState}
            handleCalculation={this.handleCalculation} />}
          />
        </div>
      </div>
    )
  }
}


export default withRouter(RisicoIndicatie)
