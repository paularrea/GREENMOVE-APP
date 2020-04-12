import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
class Login extends Component {
  state = { username: "", password: "" };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ username, password });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="loginsignup-form">
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <input
            type='text'
            className="form-control"
            name='username'
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <div className="form-group">
          <input
            type='password'
            name='password'
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={this.handleChange}
          /></div>
          <input type='submit' value='Log in' className="submit-btn" />
        </form>
      </div>
    );
  }
}
export default withAuth(Login);