import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	
class Signup extends Component {
  state = { username: "", password: "", name:"", lastName: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, name, lastName } = this.state;
    //  console.log('Signup -> form submit', { username, password });
  
    this.props.signup({ username, password, name, lastName });			//	<-- UPDATE HERE
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, name, lastName } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />

          <label>Lastname:</label>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
