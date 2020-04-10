
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../img/noun_profile_1669472.png"
import axios from "axios";


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user:{}};
  }
  
  getProfile = () => {
    axios.get(`http://localhost:4000/api/profile`).then(responseFromApi => {
      // console.log("responseeeeeee",responseFromApi.data[0])
      this.setState({
        user: responseFromApi.data[0]
      });
    });
  };

  componentDidMount() {
    this.getProfile();
  }


  render() {
      
    return (
      <div><p>My Profile</p>
        <h3>{this.state.user.name} {this.state.user.lastName}</h3>
        
       <img className ="profileImg" src={this.state.user.imageUrl ? this.state.user.imageUrl : logo} alt=""/>
      
        <p>{this.state.user.sobreMi}</p>
        <Link to={`/private/edit-profile`}>
        <h3>Edit Profile</h3>
        </Link>
        
      </div>
    );
  }
}

export default withAuth(MyProfile);