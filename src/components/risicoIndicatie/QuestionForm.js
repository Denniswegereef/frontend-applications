import React, { Component } from 'react'
import questions from '../../data/questions.json';
import slugify from 'slugify'

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
      category: currentParam
    })
  }

  // Trigger a function when new props enter the component
  componentDidUpdate(prevProps, prevState) {
    let currentParam  = this.props.currentParam

    if (currentParam !== prevProps.currentParam) {
      this.setState({
        category: currentParam
      })
    }
  }

  handleActive = (element) => {
    console.log(element)
    // ZET CATAGORY IN LOCALSTORAGE
    // ZET ANTWOORD IN LOCALSTORAGE
    localStorage.setItem(this.props.currentParam, element.target.value);

    this.setState({
      activeValue: element.target.value
    });
  }

  render() {
    // Loop to find the right questions
    let speceficQuestion = questions.map((question, index) => {
      let slugifyCategory = slugify(question.Categorie, {lower: true})

      // Find the right questions based on the props
      if (slugifyCategory === this.state.category) {
        let currentQuestion = questions[index]
        console.log(localStorage.getItem(this.props.currentParam))
        return (
          <option
            key={ currentQuestion.Name }
            value={ currentQuestion.Coefficients }>
            { currentQuestion.Name }
          </option>
        )
      } else {
        // HIER MOET EEN SELECT KOMEN
        return 'nothing'
      }
    })

    var message='You selected '+this.state.activeValue;

    return (
      <div className="risico-indicatie-questionForm">
      <h3>Vragen over { this.state.category }</h3>
      <form action="">
        <select
          value={this.state.activeValue}
          onChange={this.handleActive}>
          <option
            value='none'>
            Onbekend
          </option>
          { speceficQuestion }
        </select>

         <p>{message}</p>

      </form>
    </div>
    )
  }
}

export default QuestionForm
