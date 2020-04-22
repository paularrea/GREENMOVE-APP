import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Switch, Route } from "react-router-dom";

import Noticeboard from "./Noticeboard";
import Notifications from "./Notifications";
import AddEvents from "./AddEvents";
import MyProfile from "./MyProfile";
import EventDetails from "./EventDetails";
import NavbarPrivate from "../components/NavbarPrivate";
import EditProfile from "./EditProfile";
import Modal from "./Modal";
import ModalCreate from "./ModalCreate";
import ModalCorazonPartio from "./ModalCorazonPartio";
import MyEvents from './MyEvents'
import JoinEvents from './JoinEvents'
import ModalSend from "./ModalSend";



class Private extends Component {

  render() {
    return (
      <div className ="contenedorDesktop">
      <div className="private">
        
        {/* <h1 >Welcome {this.props.user.username}</h1>*/}
        <Switch>
          <Route exact path="/private" component={Noticeboard}/>
          <Route exact path="/private/notifications" component={Notifications}/>
          <Route exact path="/private/add-events" component={AddEvents} />
          <Route exact path="/private/my-profile" component={MyProfile} /> 
          <Route exact path="/private/edit-profile" component={EditProfile} />
          <Route exact path="/private/events/:id" component={EventDetails} />
          <Route exact path="/private/modal/:id" component={Modal} />
          <Route exact path="/private/modal-create" component={ModalCreate} />
          <Route exact path="/private/modal-message/" component={ModalSend} />
          <Route exact path="/private/modal-delete" component={ModalCorazonPartio} />
          <Route exact path="/private/my-actions" component={MyEvents} />
          <Route exact path="/private/join-actions" component={JoinEvents} />
         
        </Switch>
        <NavbarPrivate/>
      </div>
      </div>
    );
  }
}

export default withAuth(Private);