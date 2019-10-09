import React from 'react'
import { Link } from 'react-router-dom'




const Topbar = () => (
  <div className='topbar'>
    <header className='topbar-inner cont-width_0'>
      <div className='topbar-logobox topbar__padding'>
        <Link to={'/'}>
          <img src={require('../assets/img/logoIcon.png')} className="topbar-logobox__icon" alt="slack icno"/>
          <img src={require('../assets/img/logoText.svg')} className="topbar-logobox__text" alt="slack icno"/>
        </Link>
        <p>
          Best technical test
        </p>
      </div>
      <nav className="topbar__padding">
        <div className="navli active">
          <Link to={'/'} className="navli-inner">
            <span>Home</span>
          </Link>
          <div className="bottomdash"/>
        </div>
        <div className="navli">
          <Link to={'/'} className="navli-inner">
            <span>Settings</span>
          </Link>
          <div className="bottomdash"/>
        </div>
        <div className="navli">
          <Link to={'/'} className="navli-inner">
            <span>Company</span>
          </Link>
          <div className="bottomdash"/>
        </div>
      </nav>
    </header>
    <div className="topbar-bck"/>
  </div>
)


export default Topbar
