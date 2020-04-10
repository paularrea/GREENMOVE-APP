import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class NavbarPrivate extends Component {
  render() {

  
    return (
      <div className = "mt-5 pt-5"> 
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
      </div>
    );
  }
}

export default withAuth(NavbarPrivate);