import React, { Component } from 'react';


const QuestionForm = ({ match }) => (
  <div>
    <h3>Vragen over {match.params.category_name}</h3>
  </div>
);

export default QuestionForm
