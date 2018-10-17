import React, { Component } from 'react'
import '../../scss/risico-indicatie/calculation.scss'

class Calculation extends Component {
  componentDidMount() {
    console.log(this)
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <div className="risico-indicatie-calculation">
        <h2>Calculation</h2>
        <span> { this.props.calculation || 0 }%</span>
      </div>
    )
  }
}

export default Calculation
