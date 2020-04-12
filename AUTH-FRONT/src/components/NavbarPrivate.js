import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE
import  noticeLogo  from "../img/noticeboard.png"
import  inboxLogo  from "../img/notify.png"
import  activityLogo  from "../img/actions.png"
import  profileLogo  from "../img/profile.png"

class NavbarPrivate extends Component {
  render() {

  
    return (
      <div className = "mt-5 pt-5"> 
      <nav className="nav-priv navbar fixed-bottom navbar-expand-lg ">
        {
         
          (<> <div className="d-flex justify-content-center">
            <Link className="navbar-brand text-light" to="/private">
              <img className="logo-priv" src={noticeLogo} alt="noticeboard"/>
              <p>Explore</p>
            </Link>
            </div>
          
            <Link className="navbar-brand text-light" to="/private/all-events">
            <img className="logo-priv" src={activityLogo} alt="activity"/>
            <p>Activity</p>
            </Link>

            <Link className="navbar-brand text-light" to="/private/notifications">
            <img className="logo-priv" src={inboxLogo} alt="inbox"/>
            <p>Inbox</p>
            </Link>
           
            {/* <Link className="navbar-brand text-light" to="/private/add-events">
              Add Event
            </Link>
              <br /> */}

            <Link className="navbar-brand text-light" to="/private/my-profile">
            <img className="logo-priv" src={profileLogo} alt="profile"/>
            <p>Profile</p>
            </Link>
           
          </>)
        }
      </nav>
      </div>
    );
  }
}

export default withAuth(NavbarPrivate);