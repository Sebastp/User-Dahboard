import React, { useState  } from 'react'
import {Link} from 'react-router-dom'


import BoardInfoColumn from './BoardInfoColumn'

const Landing = (props) => {
  const [error, setError] = useState(false)

  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => setError(true));

  return (
    <div className="cont-width_0">
      <ul className="row">
        <div className="col-6">
          <BoardInfoColumn title="User information"/>
        </div>
        <hr className="verticalHr"/>
        <div className="col-6">
          <BoardInfoColumn title="Company details"/>
        </div>
      </ul>
    </div>
  )
}


export default Landing
