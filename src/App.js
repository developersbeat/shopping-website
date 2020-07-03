import React, { Fragment } from "react";
import "./assets/scss/main.css";
import Homepage from "./Views/Homepage";
import ShopPage from "./Views/Shop/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import SignInSignUp from "./Views/SignInSignUp/SigninSignUp";
import { auth } from "./Components/Firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
  this.unsubscribeFromAuth =  auth.onAuthStateChanged( user => {
      this.setState({currentUser : user});
      console.log(user);
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
