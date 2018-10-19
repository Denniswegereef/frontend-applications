import React, {Component} from 'react'
import '../../scss/risico-indicatie/questionreset.scss'

class QuestionReset extends Component {
  render() {
    return (
      <div className="questionreset" onClick={this.props.handleClear}>
      Herstel vragen
    </div>)
  }
}

export default QuestionReset
