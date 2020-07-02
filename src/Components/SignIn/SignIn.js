import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email:"", password:""})
  }
  handleChange = event => {
    const { value, name} = event.target;
    this.setState({ [name] : value})
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleChange}>
            <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email} required/>
            <FormInput name="password" handleChange={this.handleChange} label="Password" type="password" value={this.state.password} required/>
            <CustomButton type="submit">Sign In </CustomButton>
        </form>
      </div>
    );
  }
}
