import React, { Component } from 'react'
import {Link} from "react-router-dom";
import  modalCreate  from "../img/modalCreate.png"
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
class ModalCreate  extends Component{
  constructor(props){
    super(props)
    this.state ={user:{}, members:[]}

  }
  
  componentDidMount = () => {
    this.setState(this.props.user)
   
  }
  render() {
    return (
        <div className = "">
          <div className ="text-center">
            <img className="modalImg" src={modalCreate} alt="" srcset=""/>
        </div>
          <div className = "text-center mt-5 textModal">
          <p>Great <b>{this.state.name}</b>!</p>
          <p>You have just created </p>
          <p>an action.</p>
          </div>
          <div className = "text-center mt-5 textModal2 mb-5">
            <p><i>You must be the change you want</i> </p>
            <p> <i>to see in the world</i> </p>
            <p> <i>- Gandhi</i></p>
            
          </div>
          <Link to="/private">
              <div className="text-center">
              <button className="btn btn-primary">Back to explore</button>
              </div>
              </Link>
        </div>
    )
  }
}

export default withAuth(ModalCreate)
