import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoutLogo from "../img/sign-out-alt-solid.svg";
import { withAuth } from "../lib/AuthProvider"; //	<-- UPDATE HERE

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }
  render() {
    const {  logout, isLoggedin } = this.props; //	<-- UPDATE HERE
    return (
      <nav>
        <Link to={"/"} id="home-btn"></Link>
        {isLoggedin ? (
          <>
            <div className="logout">
            <a href  onClick={logout}>
              <img className="logoutLogo" src= {logoutLogo} alt="Logout"/>
            </a>{" "}
            </div>
            {/* 	<-- UPDATE HERE     */}
          </>
        ) : (
          <>
          <div className="navegacion row">
            <div className="col login">
              <Link to="/login">
                <button
                  className={this.state.button ? "buttonFalse" : "buttonTrue"}
                  onClick={this.handleClick}
                >
                  Log in
                </button>
              </Link>
            </div>
            <div className="col signup">
              <Link to="/signup">
                <button
                  className={this.state.button ? "buttonTrue" : "buttonFalse"}
                  onClick={this.handleClick}
                >
                  Sign up
                </button>
              </Link>
            </div>
            </div>
          </>
        )}
      </nav>
    );
  }
}
export default withAuth(Navbar);