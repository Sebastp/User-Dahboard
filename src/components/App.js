import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




import Landing from './Landing'
import Topbar from './Topbar'
import LoadingScreen from './LoadingScreen'
import UploadModal from './UploadModal'

import { ModalProvider } from './ModalContext';
import { LogosProvider } from './LogosContext';



const App = () => (
  <Router>
    <Fragment>
      <LoadingScreen/>
      <ModalProvider>
        <LogosProvider>
          <UploadModal/>

          <Topbar/>

          <Switch>
            <Route exact path="/"
              component={props => (
                <Landing {...props}/>
              )}
              />
          </Switch>
        </LogosProvider>
      </ModalProvider>
    </Fragment>
  </Router>
)




export default App
