import React, { Component } from 'react'
import questions from '../../data/questions.json'
import slugify from 'slugify'

import '../../scss/risico-indicatie/question-form.scss'

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      activeValue: 'onbekend'
    }
  }

  componentDidMount() {
    let currentParam  = this.props.currentParam

    this.setState({
      category: currentParam,
    })

    // Handle state when component first loads
    this.handleLocalStorage()
  }

  // Trigger a function when new props enter the component
  componentDidUpdate(prevProps, prevState) {
    let currentParam  = this.props.currentParam

    if (currentParam !== prevProps.currentParam) {
      this.setState({
        category: currentParam
      })

      // Set localstorage whebn component update
      this.handleLocalStorage()
    }
  }

  handleLocalStorage = () => {
    if (localStorage.getItem(this.props.currentParam)) {
      console.log('Deze bestaat in de local')
      this.setState({
        activeValue: localStorage.getItem(this.props.currentParam)
      })
    }
  }

  handleActive = (element) => {
    // ZET CATAGORY IN LOCALSTORAGE
    // ZET ANTWOORD IN LOCALSTORAGE
    localStorage.setItem(this.props.currentParam, element.target.value);

    this.setState({
      activeValue: element.target.value
    });
  }

  render() {
    //console.log(this)
    //console.log(localStorage.getItem('slachtoffer'))

    // Loop to find the right questions
    let speceficQuestion = questions.map((question, index) => {
      let slugifyCategory = slugify(question.Categorie, {lower: true})

      // Find the right questions based on the props
      if (slugifyCategory === this.state.category) {
        let currentQuestion = questions[index]
        return (
          <option
            key={ currentQuestion.Name }
            value={ currentQuestion.Coefficients }>
            { currentQuestion.Name }
          </option>
        )
      }
    })
    return (
      <div className="risico-indicatie-questionForm">
        <div className="risico-indicatie-questionForm-content">
          <h2>Vragen over { this.state.category }</h2>
          <form action="">
            <select
              value={this.state.activeValue}
              onChange={this.handleActive}>
              <option
                value='none'>
                Niet bekend
              </option>
              { speceficQuestion }
            </select>
          </form>
      </div>
    </div>
    )
  }
}

export default QuestionForm
