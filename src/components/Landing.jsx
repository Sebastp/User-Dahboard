import React, { useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'

import logosArr from '../helpers/logos'
import fetchDataFromApi from '../helpers/dataFetching'

import BoardInfoColumn from './BoardInfoColumn'

const Landing = (props) => {
  const [error, setError] = useState(false),
        [boardLoading, setBoardLoading] = useState(true),
        [boardData, setBoardData] = useState({})


  useEffect(() => {
    fetchDataFromApi('https://jsonplaceholder.typicode.com/users/1')
    .then(data => {
      setBoardData(data)
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

      <div className="logosCont">
        <div className="logosCont-header">
          <h2 className='section-title componentHeader'>
            Avaliable <span>logos</span>
          </h2>

          <button className="btn-text">
            Upload New
          </button>
        </div>

        <div className="logosCont-content">
          <ul className="row">
            {
              logosArr.map((logoObj, i)=>(
                <li className="col-3">
                  <div className="logosCont-liInner">
                    <img src={logoObj.url} className="boardCol-avatar" alt="logo image"/>
                  </div>
                </li>
              ))
            }
          </ul>
          <div className="logosCont-content-bck"/>
        </div>
      </div>
    </div>
  )
}


export default Landing
