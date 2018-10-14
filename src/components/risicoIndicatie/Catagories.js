import React, { Component } from 'react'
import data from '../../data/data.json';
import questions from '../../data/questions.json';
import CatagorieBlock from '../../components/UI/CatagorieBlock.js'
import '../../scss/catagories.scss';

class Catagories extends Component {
  render() {
    let questionsList = new Array()

    const catagoriesOneOne = questions.map(question => {
      if(!questionsList.includes(question.Categorie)) {
        questionsList.push(question.Categorie)
      }
    })

    return (
      <div className="catagories">
        <ul>
          <CatagorieBlock questions={ questionsList }/>
        </ul>
      </div>
    )
  }
}

export default Catagories
