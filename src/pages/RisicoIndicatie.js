import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import QuestionForm from '../components/risicoIndicatie/QuestionForm.js'
import Categories from '../components/risicoIndicatie/Categories.js'

const RisicoIndicatie = ({ match }) => (
  <div>
    <h2>Catagoriën</h2>
    <Categories match={ match }/>

    <Route path={`${match.path}/:category_name`} component={QuestionForm} />
    <Route exact path={match.path} component={QuestionForm}
    />
  </div>
);

export default RisicoIndicatie
