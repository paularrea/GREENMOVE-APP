
import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../img/noun_profile_1669472.png"



class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  getUserProfile = () => {
    axios.get(`http://localhost:4000/api/profile`)
    .then((responseFromApi) => {
        const profile = responseFromApi.data;
        this.setState(profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getUserProfile();
  }

  render() {
      
    return (
      <div><p>My Profile</p>
        <h3>{this.props.user.name}</h3>
        <h3>{this.props.user.lastName}</h3>
       <img className ="profileImg" src={this.props.imgUrl ? this.props.imgUrl :  logo } alt=""/>
        <h3>{this.props.user.username}</h3>
        <h3>{this.props.user.username}</h3>
        <h3>{this.props.user.username}</h3>
        <Link to={`/private/edit-profile`}>
        <h3>Edit Profile</h3>
        </Link>
        
      </div>
    );
  }
}

export default withAuth(MyProfile);