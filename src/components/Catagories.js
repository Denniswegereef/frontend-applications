import React, { Component } from 'react'
import data from '../data/data.json';

class Catagories extends Component {

  render () {
    return (
      <div>
        {
          data.map(function(movie){
            return <li>{movie.id} - {movie.title}</li>;
          })
        }
      </div>
    )
  }
}

export default Catagories
