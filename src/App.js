import React, { Fragment } from 'react';
import './assets/scss/main.css';
import Homepage from './Views/Homepage';
import ShopPage from "./Views/Shop/shop";
import {Route, Switch} from 'react-router-dom';
import Header from "./Components/Header/Header";
import SignInSignUp from "./Views/SignInSignUp/SigninSignUp";

function App() {
  return (
    <Fragment>
    <Header/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/shop' component={ShopPage}/>
       <Route exact path='/signin' component={SignInSignUp}/>


     </Switch>
    </Fragment>
  );
}

export default App;
