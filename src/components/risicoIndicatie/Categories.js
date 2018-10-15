import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import questions from '../../data/questions.json';
import slugify from 'slugify'

class Categories extends Component {
  render() {
    // Match is the current siub-state
    const match = this.props.match.url

    // Loop over the data, put it in a new array with unique categories
    const categories = questions
      .map(question => question.Categorie)
      .filter((catagorie, index, all) => all.indexOf(catagorie) == index)

    // Print the list items
    const categorie_single = categories.map(question => {
      // Make the name browser-friendly
      let slugifyName = slugify(question, {lower: true})

      return (
        <li key={slugifyName}>
            <Link to={`${match}/${slugifyName}`}>{ question }</Link>
        </li>
      )
    })

    // Render everything to the page
    return (
      <ul>
        { categorie_single }
      </ul>
    )
  }
}

export default Categories
