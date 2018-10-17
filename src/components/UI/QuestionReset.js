import React, { Component } from 'react'
import '../../scss/risico-indicatie/questionreset.scss'


class QuestionReset extends Component {
  handleReset() {
    console.log('reset')
  }

  render() {
    return (
      <div className="questionreset" onClick={ this.handleReset }>
        Herstel vragen
      </div>
    )
  }
}

export default QuestionReset
