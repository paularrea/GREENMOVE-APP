import React, { Component } from 'react'
import {Link} from "react-router-dom";
import  modalCorazon  from "../img/corasonPartio.png"
import { withAuth } from "../lib/AuthProvider";

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
            <img className="modalImg" src={modalCorazon} alt="" srcset=""/>
        </div>
          <div className = "text-center mt-5 textModal">
          <p>Oooh <b>{this.state.name}...</b></p>
          <p>We are sorry that you</p>
          <p>can't come to the action.</p>
          </div>
          <div className = "text-center mt-5 textModal2 mb-5">
            <p><i>Hopefully you can join</i> </p>
            <p> <i>the next one</i> </p>
         
            
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
