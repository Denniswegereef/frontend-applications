import React, { Component } from 'react'
import questions from '../../data/questions.json';
import slugify from 'slugify'

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }

  // Trigger a function when new props enter the component
  componentDidUpdate(prevProps, prevState) {
    let prevPropsCategory = prevProps.match.params.category_name
    let stateCategory = this.props.match.params.category_name

    // Prevent infinitem loop
    if (prevPropsCategory !== stateCategory) {
      this.setState({
        category: stateCategory
      })

      // Trigger render again
      this.forceUpdate();
    }
  }

  render() {
    // Loop to find the right questions
    let speceficQuestion = questions.map((question, index) => {
      let slugifyCategory = slugify(question.Categorie, {lower: true})

      // Find the right questions based on the props
      if (slugifyCategory === this.state.category) {
        return (
          <option
            key={ questions[index].Name }
            value={ questions[index].Coefficients }>
            { questions[index].Name }
          </option>
        )
      }
    })

    return (
      <div className="risico-indicatie-questionForm">
      <h3>Vragen over { this.state.category }</h3>
      <form action="">
        <select>
          <option
            value='none'>
            Onbekend
          </option>
          { speceficQuestion }
        </select>
      </form>
    </div>
    )
  }
}

export default QuestionForm
