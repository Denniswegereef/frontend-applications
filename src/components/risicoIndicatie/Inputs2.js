import React, { Component } from 'react'
import data from '../../data/data.json';

class Inputs extends Component {
  state = {
    id: null
  }
  componentDidMount() {
      let id = this.props.match.params.catagory_name

    this.setState({
      id: id
    })
  }
  render() {
    return (
      <div>
        Route param is: { this.state.id }
      </div>
    )
  }
}

export default Inputs
