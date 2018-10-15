import React, { Component } from 'react'


class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { category: null };
  }

  render() {
    return (
      <h3>Vragen over { this.props.match.params.category_name }</h3>
    )
  }
}

export default QuestionForm
