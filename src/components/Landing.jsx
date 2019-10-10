import React, { useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'


import BoardInfoColumn from './BoardInfoColumn'

const Landing = (props) => {
  const [error, setError] = useState(false),
        [boardLoading, setBoardLoading] = useState(true),
        [boardData, setBoardData] = useState({})


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      var userData = {
        'infoArray': [
          {'name': 'Email address', 'value': data['email']},
          {'name': 'Phone number', 'value': data['phone']}
        ]
      }

      var companyData = {
        'infoArray': [
          {'name': 'Name', 'value': data['company']['name']},
          {'name': 'Catch phrase', 'value': data['company']['catchPhrase']}
        ],
        'links': [
          {'name': data['website'], 'value': data['website']},
          {'name': 'twitter', 'value': '/'},
          {'name': 'facebook', 'value': '/'}
        ]
      }

      let updatedData = {...data, userData, companyData}

      setBoardData(updatedData)
      setBoardLoading(false)
    })
    .catch(error => setError(true));
  }, []);


  return (
    <div className="cont-width_0">
      <ul className="row boardCont">
        <div className="col-12 col-lg-6 rightPadding">
          {!boardLoading&&(
            <BoardInfoColumn title="User information" {...boardData.userData}>
              <Fragment>
                <img src={require('../assets/img/avatar.png')} className="boardCol-avatar" alt="icon"/>
                <h3>{boardData.name}</h3>
              </Fragment>
            </BoardInfoColumn>
          )}
        </div>
        <hr className="verticalHr"/>
        <div className="col-12 col-lg-6 leftPadding">
          {!boardLoading&&(
            <BoardInfoColumn title="Company details" {...boardData.companyData}/>
          )}
        </div>
      </ul>
    </div>
  )
}


export default Landing
