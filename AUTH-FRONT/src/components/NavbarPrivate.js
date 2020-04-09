import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class NavbarPrivate extends Component {
  render() {

  
    return (
      <nav className="navbar  fixed-bottom navbar-expand-lg bg-dark navbar-light bg-light">
        {
         
          (<> 
            <Link className="navbar-brand text-light" to="/private">
              Noticeboard
            </Link>
            <br />
            <Link className="navbar-brand text-light" to="/private/notifications">
             Notifications
            </Link>
            <br />
            <Link className="navbar-brand text-light" to="/private/add-events">
              Add Event
            </Link>
              <br />
            <Link className="navbar-brand text-light" to="/private/my-profile">
              Profile
            </Link>
            <br />
            <Link className="navbar-brand text-light" to="/private/my-events">
              My Accions
            </Link>
           
          </>)
        }
      </nav>
    );
  }
}

export default withAuth(NavbarPrivate);