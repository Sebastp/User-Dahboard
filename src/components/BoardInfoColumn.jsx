import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"




const BoardInfoColumn = ({children, title}) => (
  <div className='topbar'>
    <h2>
      {title}
      <span>{title}</span>
    </h2>

    <div className='topbar-logobox topbar__padding'>
      <p>
        Best technical test
      </p>
    </div>
  </div>
)


BoardInfoColumn.propTypes = {
  title: PropTypes.string,
}

BoardInfoColumn.defaultProps = {
  title: `Board Title`,
}

export default BoardInfoColumn
