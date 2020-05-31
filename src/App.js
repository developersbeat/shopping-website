import React, { Fragment } from 'react';
import './assets/scss/main.css';
import Homepage from './Views/Homepage';
import {HatsPage} from './Views/Homepage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/hats' component={HatsPage}/>

     </Switch>
    </Fragment>
  );
}

export default App;
