import React, { Component } from 'react'
import {Link} from "react-router-dom";
import  activityLogo  from "../img/modal.png"
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
class Modal  extends Component{
  constructor(props){
    super(props)
    this.state ={user:{}, members:[]}

  }
  getEvent = () => {
    const { params } = this.props.match;
     console.log(params.id, "paramsEvent")
    axios
      .get(`http://localhost:4000/api/events/${params.id}`)
      .then((responseFromApi) => {
        const event = responseFromApi.data;
        this.setState(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.setState(this.props.user)
    this.getEvent();
  }
  render() {
    return (
        <div className = "">
          <div className ="text-center">
            <img className="modalImg" src={activityLogo} alt="" srcset=""/>
        </div>
          <div className = "text-center mt-5 textModal">
          <p>Congratulations <b>{this.state.name}</b> !</p>
          <p>You are going to attend to:</p>
          <p><b>{this.state.title}</b></p>
          </div>
          <div className = "text-center mt-5 textModal2 mb-5">
            <p><i>You and <b>{this.state.members.length}</b> more people are</i> </p>
            <p><i>collaborating in  this action</i></p>
            
          </div> 
          <div className="text-center">
          <Link to="/private"><button className="btn btn-primary">Back to explore</button></Link>
          </div>
        </div>
    )
  }
}

export default withAuth(Modal)
