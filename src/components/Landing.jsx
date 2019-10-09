import React, { useState  } from 'react'
import {Link} from 'react-router-dom'



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
        
      </ul>
    </div>
  )
}


export default Landing
