import React from 'react'


const ErrorBox = (props) => {
  const {msg} = props
  return (
    <div className='errorBox'>
      <div className="center">
        <p>
          {msg}
        </p>
      </div>
      <div className='bck'/>
    </div>
  )
}




export default ErrorBox
