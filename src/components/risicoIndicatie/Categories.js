import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import questions from '../../data/questions.json';
import slugify from 'slugify'

import '../../scss/risico-indicatie/categories.scss'

import testFlask from '../../images/category-icons/flask.svg';

class Categories extends Component {
  render() {
    // Match is the current siub-state
    const match = this.props.match.url

    // Loop over the data, put it in a new array with unique categories
    const categories = questions
      .map(question => question.Categorie)
      .filter((catagorie, index, all) => all.indexOf(catagorie) === index)

    // Print the list items
    const categorie_single = categories.map(question => {
      // Make the name browser-friendly
      let slugifyName = slugify(question, {lower: true})

      return (
        <li key={slugifyName}>
            <NavLink to={`${match}/${slugifyName}`}
            onClick={() => {this.props.handleParams(slugifyName, question)}}>
            <img src={testFlask}/>
            <p>{ question}</p>
          </NavLink>
        </li>
      )
    })

    // Render everything to the page
    return (
      <div className="risico-indicatie-categories">
        <h1>Categoriën</h1>
          <ul>
            { categorie_single }
          </ul>
      </div>
    )
  }
}

export default Categories
