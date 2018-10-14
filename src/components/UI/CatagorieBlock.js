import React from 'react';
import '../../scss/catagories.scss';

const CatagorieBlock = ({ questions }) => {
  const questionSingle = questions.map(question => {
    return (
      <li className="catagorie-single"><a>{ question }</a></li>
    )
  })

  return (
    <React.Fragment>
      { questionSingle }
    </React.Fragment>
  )
}

export default CatagorieBlock
