import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Switch, Route } from "react-router-dom";

import Noticeboard from "./Noticeboard";
import Notifications from "./Notifications";
import AddEvents from "./AddEvents";
import MyEvents from "./MyEvents";
import MyProfile from "./MyProfile";
import EventDetails from "./EventDetails";
import NavbarPrivate from "../components/NavbarPrivate";
import EditProfile from "./EditProfile";


class Private extends Component {

  render() {
    return (
      <div className="private">
        
        {/* <h1 >Welcome {this.props.user.username}</h1>*/}
        <Switch>
          <Route exact path="/private" component={Noticeboard}/>
          <Route exact path="/private/notifications" component={Notifications}/>
          <Route exact path="/private/add-events" component={AddEvents} />
          <Route exact path="/private/my-events" component={MyEvents} />
          <Route exact path="/private/my-profile" component={MyProfile} /> 
          <Route exact path="/private/edit-profile" component={EditProfile} />
          <Route exact path="/private/events/:id" component={EventDetails} />
        </Switch>
        <NavbarPrivate/>
     
      </div>
    );
  }
}

export default withAuth(Private);