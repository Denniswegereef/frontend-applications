import React from 'react'
import '../../scss/catagories.scss'
import Inputs from '../risicoIndicatie/Inputs.js'

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import slugify from 'slugify'

const CatagorieBlock = ({ questions }) => {

  const single_catagory_name = questions.map(question => {
    let key = slugify(question, {lower: true})

    return (
      <li className="catagorie-single" key={ key }>
        <Link to={ '/category/' + key }>{ question }</Link>
      </li>
    )
  })

  return (
    <React.Fragment>
      {  single_catagory_name }
    </React.Fragment>
  )
}

export default CatagorieBlock
