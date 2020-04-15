import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../img/noun_profile_1669472.png"
import accions from "../img/modalCreate.png"
import joinMod from "../img/actions.png"
import auth from "../api/service"
import edit from "../img/edit.png"
import Navbar from "../components/Navbar";
class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {user:{
      myAccions:[],
      joinAccions:[]
    }};
  }
  componentDidMount = async () => {
   const userInfo = await auth.getUserInfo()
    this.setState({user: userInfo})
    console.log(this.state.user.myAccions.length, 'el useeeer')
  }
  render() {
    console.log(this.state.myAccions, 'state')
    return (
      <div className="container-page d-flex justify-content-center">
        <Navbar />
         <div >
           
    
    <div className="text-center">
      <div>
    <Link to={`/private/edit-profile`}>
        <button className="btnBorder "><img className="logo-priv" src={edit} alt=""/></button>
         </Link>
  </div> 
      <div className="text-center">
    <h3 className =" mb-2">Profile</h3>
    </div>


        <img className ="profileImg mt-3 mb-2" src={this.state.user.imageUrl ? this.state.user.imageUrl : logo} alt=""/>
    </div>
    <div className="text-justify profile-text">
      <div>
        <p className="mt-4"><b>Name:</b> {this.state.user.name}</p>
        <p className="mt-4"><b>Lastname:</b> {this.state.user.lastName}</p>
        <p className="mt-4"><b>About me:</b> {this.state.user.sobreMi}</p>
        
        <div className=" row d-flex align-items-center">
        
        <p className="mt-4 pl-3 mr-2"><b>Created actions:</b> {this.state.user.myAccions.length}</p>
        <img className="medalProfile" src={accions} alt="" srcset=""/>
        </div>
        <div className="row d-flex align-items-center">
           
        <p className="mt-4 pl-3  mr-2"><b>Joined actions:</b> {this.state.user.joinAccions.length}</p>
        <img className="medalProfile" src={joinMod} alt="" srcset=""/>
        </div>
        </div>
        <div className="row d-flex justify-content-center text-center">
        
        <Link  to="/private/add-events">
          <div className ="col">
        <button className="btn  btnOrange mt-4">Create Action</button>
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