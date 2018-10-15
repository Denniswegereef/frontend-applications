import React, { Component } from 'react'
import questions from '../../data/questions.json';
import CatagorieBlock from '../../components/UI/CatagorieBlock.js'
import '../../scss/catagories.scss';

class Catagories extends Component {
  render() {
    // Shout out naar Titus
    const catagories = questions
      .map(question => question.Categorie)
      .filter((catagorie, index, all) => all.indexOf(catagorie) == index)

    console.log(catagories)

    return (
      <div className="catagories">
        <ul>
          <CatagorieBlock questions={ catagories }/>
        </ul>
      </div>
    )
  }
}

export default Catagories
