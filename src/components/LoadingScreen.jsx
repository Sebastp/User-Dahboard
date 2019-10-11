import React from 'react'



const LoadingScreen = () => (
  <div className='loadingScreen'>
    <div className='loadingScreen-inner'>
      <div className='loadingScreen-logobox'>
        <img src={require('../assets/img/logoIcon.png')} className="logobox__icon" alt="Logo"/>
        <img src={require('../assets/img/logoText.svg')} className="logobox__text" alt="Logo"/>
      </div>
      <div className="loadingScreen-bck2"/>
      <div className="loadingScreen-bck1"/>
    </div>
  </div>
)


export default LoadingScreen
