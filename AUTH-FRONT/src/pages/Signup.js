import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = { username: "", password: "", name: "", lastName: "" };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password, name, lastName } = this.state;
    //  console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password, name, lastName }); //	<-- UPDATE HERE
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { username, password, name, lastName } = this.state;
    return (
      <div className="loginsignup-form">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Lastname"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Sign up" className="submit-btn" />
        </form>
        <div className="logRedirect">
        <p>Already have account?</p>
        <Link to={"/login"} className="btn-redirect"> Log in</Link>
      </div>
      </div>
    );
  }
}
export default withAuth(Signup);