import React, { useState, useContext, useEffect, Fragment} from 'react'

import logosArr from '../helpers/logos'
import fetchDataFromApi from '../helpers/dataFetching'

import BoardInfoColumn from './BoardInfoColumn'
import { ModalContext } from './ModalContext';
import { LogosContext } from './LogosContext';



const Landing = (props) => {
  const [error, setError] = useState(false),
        [boardLoading, setBoardLoading] = useState(true), // TODO: loading animation if board data not loaded
        [boardData, setBoardData] = useState({}),
        {toggle, isShowing} = useContext(ModalContext),
        {logosArr} = useContext(LogosContext)

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


          <button className="btn-text" onClick={toggle} id={isShowing+''}>
            Upload New
          </button>
        </div>

        <div className="logosCont-content">
          <ul className="row">
            {
              logosArr.map((logoObj, i)=>(
                <li className="col-3" key={i}>
                  <div className="logosCont-liInner">
                    <img src={logoObj.url} className="logosCont-logoimg" alt="logo image"/>
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
