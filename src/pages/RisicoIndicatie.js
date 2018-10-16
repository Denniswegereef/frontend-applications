import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Categories from '../components/risicoIndicatie/Categories.js'
import QuestionForm from '../components/risicoIndicatie/QuestionForm.js'
import Calculation from '../components/risicoIndicatie/Calculation.js'

import '../scss/risico-indicatie/layout.scss'

class RisicoIndicatie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: null
    };
  }

  handleLOL = (param) => {
    console.log('FIRED G')
  }

  handleParams = (param) => {
    this.setState({
      currentState:param
    })
  }

  render() {
    let match = this.props.match
    
    return (
      <div className="risico-indicatie">
        <Categories match={ match } handleParams={this.handleParams}/>
        <Route path={`${match.path}/:category_name`} render={()=><QuestionForm someProp={100} currentParam={this.state.currentState} />}/>
        <Calculation/>
      </div>
    )
  }
}


export default RisicoIndicatie


{/* <Route path={`${match.path}/:category_name`} component={QuestionForm} />
<Route exact path={match.path} component={QuestionForm}/> */}
