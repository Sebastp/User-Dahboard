import React from 'react'


const UploadModal = (props) => {
  const {msg} = props
  return (
    <div className='modalCont'>
      <div className="center">
        <p>
          {msg}
        </p>
      </div>
      <div className='bck'/>
    </div>
  )
}




export default UploadModal
