import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"




const BoardInfoColumn = ({children, infoArray, title, links}) => {
  const titleFirstWord = title.split(" ")[0],
        titleRest = title.substr(titleFirstWord.length)

  return(
    <div className='boardCol'>
      <h2 className='boardCol-title'>
        {titleFirstWord} <span>{titleRest}</span>
      </h2>

      <div className='boardCol-content'>
        {children&&(
          <div className='boardCol-content-top'>
            {children}
          </div>
        )}

        <div className='boardCol-content-main'>
          {
            infoArray.map((infoLi, i)=>(
              <div key={i} className='content-row'>
                <span>{infoLi['name']}</span>
                <h5>{infoLi['value']}</h5>
              </div>
            ))
          }
        </div>

        {links&&(
          <div className='boardCol-content-bottom'>
            {links.map((linkObj, i)=>{
              let {name, value} = linkObj,
                  linkContent

              switch (name) {
                case 'facebook':
                  linkContent = (
                    <Link className="boardCol-url boardCol-socialIcon" to={value} key={i}>
                      <img src={require('../assets/img/fb.svg')} alt="icon"/>
                    </Link>
                  )
                break;
                case 'twitter':
                  linkContent = (
                    <Link className="boardCol-url boardCol-socialIcon" to={value} key={i}>
                      <img src={require('../assets/img/twt.svg')} alt="icon"/>
                    </Link>
                  )
                break;
                default:
                  linkContent = (
                    <Link className="boardCol-url boardCol-urlLabel" to={value} key={i}>
                      <span>{name}</span>
                    </Link>
                  )
              }

              return(linkContent)
            })}
          </div>
        )}
      </div>
    </div>
  )
}


BoardInfoColumn.propTypes = {
  title: PropTypes.string,
  infoArray: PropTypes.array,
}

BoardInfoColumn.defaultProps = {
  title: `Board Title`,
  infoArray: [{'title': 'Name', 'value': 'Name of user'}],
}

export default BoardInfoColumn
