import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import AddThing from "../components/AddThing";
import Maps from "../components/Map"
import EventDetails from "./EventDetails";
class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>	
        <EventDetails/>
        <AddThing/>
        <Maps/> 
      </div>
    );
  }
}

export default withAuth(Private);