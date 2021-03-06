import React, {Component} from 'react'
import questions from '../../data/questions.json'
import slugify from 'slugify'

import '../../scss/risico-indicatie/question-form.scss'
import QuestionReset from '../UI/QuestionReset.js'

import {BrowserRouter as Router, Route} from "react-router-dom";

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParam: null
    }
  }

  handleClear = () => {
    console.log('clear')
    localStorage.clear()
    Router.push('/')

    // browserHistory.push('/risico-indicatie')
  }

  handleLocalStorage = (category, value) => {
    localStorage.setItem(category, value)

    if (localStorage.getItem(this.props.currentParam)) {
      this.setState({
        [this.props.currentParam]: localStorage.getItem(this.props.currentParam)
      })
    }
  }

  componentDidMount() {
    this.handleLocalStorage()
    console.log(this.props)
  }

  // Trigger a function when new props enter the component
  componentDidUpdate(prevProps, prevState) {
    let currentParam = this.props.currentParam

    if (currentParam !== prevProps.currentParam) {
      this.setState({currentParam: currentParam})

      // Set localstorage whebn component update
      this.handleLocalStorage()
    }
  }

  handleActive = (category, value, weight) => {
    // Put in localstorage
    this.setState({[category]: value})

    this.handleLocalStorage(category, value)

    this.props.handleCalculation(category, weight)
  }

  render() {
    // Loop to find the right questions
    let speceficQuestion = questions.map((question, index) => {
      let slugifyCategory = slugify(question.Categorie, {lower: true})

      // Find the right questions based on the props
      if (slugifyCategory === this.props.currentParam) {
        //console.log(question)
        let currentQuestion = questions[index]

        // Check the state if there is a checked variant of this category and put it on true for the right one
        let checkRadio
        this.state[slugifyCategory] === question.Coefficients
          ? checkRadio = true
          : checkRadio = false

        return (<label key={currentQuestion.Name}>
          <input name={slugifyCategory} type="radio" checked={checkRadio} onChange={() => {
              this.handleActive(slugifyCategory, currentQuestion.Coefficients, currentQuestion.Gewicht)
            }} value={currentQuestion.Coefficients}/>
          <span>{currentQuestion.Name}</span>
        </label>)
      } else { return true}
    })
    return (<div className="risico-indicatie-questionForm">
      <div className="risico-indicatie-questionForm-content">

        <QuestionReset handleClear={this.handleClear}/>

        <h2>Vragen over {this.props.currentParam.replace(/[-\s]/g," ")}</h2>
        <form action="">
          <label type="radio">
            <input type="radio" checked={!localStorage.getItem(this.props.currentParam) || localStorage.getItem(this.props.currentParam) === 'onbekend'} name={this.props.currentParam} onChange={() => {
                this.handleActive(this.props.currentParam, 'onbekend', '0')
              }}/>
            <span>Onbekend</span>
          </label>
          {speceficQuestion}
        </form>
      </div>
    </div>)
  }
}

export default QuestionForm
