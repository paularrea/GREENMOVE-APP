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
     <div className="pt-3">
      <div className = "mt-5 pt-5"> 
      <nav className="nav-priv navbar fixed-bottom navbar-expand-lg ">
        {
         
          (<> <div className="d-flex justify-content-center">
            <Link className="navbar-brand text-light" to="/private">
            <div className = "col text-center">
              <img className="logo-priv" src={noticeLogo} alt="noticeboard"/>
              <p>Explore</p>
            </div>
            </Link>
            </div>
          
            <Link className="navbar-brand text-light" to="/private/my-actions">
            <div className = "col text-center">
            <img className="logo-priv" src={activityLogo} alt="activity"/>
            <p>Activity</p>
            </div>
            </Link>

            <Link className="navbar-brand text-light" to="/private/notifications">
            <div className = "col text-center">
            <img className="logo-priv" src={inboxLogo} alt="inbox"/>
            <p>Inbox</p>
            </div>
            </Link>
           
            {/* <Link className="navbar-brand text-light" to="/private/add-events">
              Add Event
            </Link>
              <br /> */}

            <Link className="navbar-brand text-light" to="/private/my-profile">
            <div className = "col text-center">
            <img className="logo-priv" src={profileLogo} alt="profile"/>
            <p>Profile</p>
            </div>
            </Link>
           
          </>)
        }
      </nav>
      </div>
      </div>
    );
  }
}

export default withAuth(NavbarPrivate);