import React, {useContext, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import FileDrop from 'react-file-drop'


import validateFile from '../helpers/validateFile'


import { ModalContext } from './ModalContext'
import { LogosContext } from './LogosContext'



const UploadModal = () => {
  const {toggle, isShowing} = useContext(ModalContext),
        {logosArr, addToLogosList} = useContext(LogosContext),
        [uploadError, setUploadError] = useState(false),
        [uploadedImage, setUploadedImage] = useState(false)


    //reset on close
    useEffect(() => {
      setUploadError(false)
      setUploadedImage(false)
    }, [isShowing]);


  const handleDrop = (files, e) => {
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      let dragedFile = e.dataTransfer.files[0]

      validateFile(dragedFile)
      .then(fileObj => {
        setUploadedImage(fileObj)
      })
      .catch(error => setUploadError(error))


      e.dataTransfer.clearData()
    }
  }

  const uploadImage = () => {
    if (uploadedImage) {
      addToLogosList(uploadedImage.src)
      toggle()
    }
  }


  return (isShowing ? ReactDOM.createPortal(
    <div className='modalCont'>
      <div className='cont-width_0 modalCont-inner'>
        <div className='cont-width_0 modalCont-inner__padding'>
          <div className='modalCont-box'>
            <div className="center">
              <h2 className='componentHeader'>
                Drag & Drop Your Logo
              </h2>

              <div className="modalCont-mid">
                <FileDrop className="modalCont-droparea" onDrop={handleDrop}>
                  <span>{uploadedImage?uploadedImage.name:'Drop Here'}</span>
                </FileDrop>
              </div>

              <p className="subMsg">{"File schould be .jpg or .png, size < 5mb and dimension < 1080p"}</p>
              {uploadError&&(<p className="errorMsg">{uploadError}</p>)}

              <button className={"btn-full "+(!uploadedImage&&(' inactive'))} onClick={uploadImage}>Upload</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bck' onClick={toggle}/>
    </div>, document.getElementById('index')
  ) : null)
}




export default UploadModal
