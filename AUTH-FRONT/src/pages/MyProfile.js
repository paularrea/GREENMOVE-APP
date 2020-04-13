import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../img/noun_profile_1669472.png"
import auth from "../api/service"

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user:{}, myAccions:[], joinAccions:[]};
  }
  componentDidMount = () => {
    auth.getUserInfo()
    this.setState(this.props.user)
  }
 
   
  render() {
    console.log(this.state.myAccions, 'state')
    return (
      <div className="container-page d-flex justify-content-center">
       
    <div>
    <div className="text-center">
        <h3>{this.state.username}</h3>
        <img className ="profileImg mt-3 mb-2" src={this.state.imageUrl ? this.state.imageUrl : logo} alt=""/>
    </div>
    <div className="text-justify profile-text">
        <p className="mt-4"><b>Name:</b> {this.state.name}</p>
        <p className="mt-4"><b>Lastname:</b> {this.state.lastName}</p>
        <p className="mt-4"><b>About me:</b> {this.state.sobreMi}</p>
        <p className="mt-4">Created actions: {this.state.myAccions.length}</p>
        <p className="mt-4">Joined actions: {this.state.joinAccions.length}</p>
        <div className="row d-flex justify-content-center text-center">
        <Link to={`/private/edit-profile`}>
          <div className ="col">
        <button className="btn btn-primary btnEdit mt-4">Edit Profile</button>
        </div>
        </Link>
        <Link  to="/private/add-events">
          <div className ="col">
        <button className="btn btn-warning text-light btnEdit mt-4">Add Event</button>
        </div>
            </Link>
              <br />
      </div>
      </div>
      </div>
      </div>
        
      
      
    );
  }
}
export default withAuth(MyProfile);