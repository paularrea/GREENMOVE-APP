import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
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
      <div className="fondoApp">
      <div className=" m-3 padLog">
      <nav>
        
        <div
          className="btn-group-active row d-flex justify-content-center mb-3"
          data-toggle="buttons"
          role="group"
          aria-label="Basic example"
        >
          <div className="m-2">
            <Link to="/signup">
              <button type="radio" id="1" className="btn btnOffLog">
                Sign up
              </button>
            </Link>
          </div>
          <div className="m-2 ">
            <Link to="/login">
              <button type="radio" id="2" className="btn btnOnLog">Log in</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="loginsignup-form">
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <input
          required
            type='text'
            className="form-control formLog"
            name='username'
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <div className="form-group">
          <input
          required
            type='password'
            name='password'
            placeholder="Password"
            className="form-control formLog"
            value={password}
            onChange={this.handleChange}
          /></div>
          <div className="text-center pt-3">
          <input type='submit' value='Log in' className="btnBlueLog" />
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}
export default withAuth(Login);