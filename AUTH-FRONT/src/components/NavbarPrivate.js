import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class NavbarPrivate extends Component {
  render() {

  
    return (
      <nav className="navbar  fixed-bottom navbar-expand-lg bg-dark navbar-light bg-light">
        {
         
          (<> 
            <Link to="/private">
              <a className="navbar-brand text-light ">Noticeboard</a>
            </Link>
            <br />
            <Link to="/private/notifications">
              <a className="navbar-brand text-light">Notifications</a>
            </Link>
            <br />
            <Link to="/private/add-events">
              <a className="navbar-brand text-light">Add Event</a>
            </Link>
              <br />
            <Link to="/private/my-profile">
              <a className="navbar-brand text-light">Profile</a>
            </Link>
            <br />
            <Link to="/private/my-events">
              <a className="navbar-brand text-light">My Accions</a>
            </Link>
           
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(NavbarPrivate);