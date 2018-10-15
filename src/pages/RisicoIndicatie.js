import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import QuestionForm from '../components/risicoIndicatie/QuestionForm.js'

const RisicoIndicatie = ({ match }) => (
  <div>
    <h2>Vragen</h2>
    <ul>
      <li>
        <Link to={`${match.url}/herkomst`}>Herkomst</Link>
      </li>
      <li>
        <Link to={`${match.url}/ouders`}>Ouders</Link>
      </li>
      <li>
        <Link to={`${match.url}/vragen`}>Vraag</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:category_name`} component={QuestionForm} />
    <Route exact path={match.path} render={() => <h3>Geen catagorie gekozen.</h3>}
    />
  </div>
);

export default RisicoIndicatie
