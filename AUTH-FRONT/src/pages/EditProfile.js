import React, { Component } from 'react'
import axios from "axios";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}};
    }
    
    componentDidMount = () => {
        this.setState({ user: this.props.user})    
    }

      handleFileUpload = (e) => {
        console.log("The file to be uploaded is :", e.target.files[0]);
        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        service
          .handleUpload(uploadData)
          .then((response) => {
            this.setState({ imageUrl: response.secure_url });
          })
          .catch((err) => {
            console.log("Error while uploading the file:", err);
          });
      };


      handleSubmit = (e) => {
        e.preventDefault();
        service
          .profileUpdate(this.state)
          .then((res) => {
            console.log("Edited!", res);
            // here you'd want to redirect
          })
          .catch((err) => {
            console.log("Error while editing the profile:", err);
          });
      };

      handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( {user: { [name]: value }})
        
        
      };

    render() {
        return (
           
            
      <div className="createEvent pb-5 mb-5">
        <h2>Edit User</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="idProfileImg">Edit profile image</label>
            <input
              type="file"
              className="form-control"
              id="idProfileImg"
                name= "imageUrl"
              aria-describedby="image"
              placeholder={this.state.user.imageUrl}
              onChange={(e) => this.handleFileUpload(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Name</label>
            <input
              className="form-control"
              id="idName"
              aria-describedby="Name"
              placeholder={this.state.user.name}
              type="text"
              name="name"
              value={this.state.user.name}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Lastname</label>
            <input
              className="form-control"
              id="idLastName"
              aria-describedby="Lastname"
              placeholder={this.state.user.lastName}
              type="text"
              name="lastName"
              value={this.state.user.lastName}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idSobreMi">Sobre Mi</label>
            <textarea
              className="form-control"
              id="idSobremi"
              aria-describedby="Sobremi"
              placeholder={this.props.user.sobreMi}
              type="text"
              name="sobreMi"
              value={this.props.user.sobreMi}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
    
          <button className="btn btn-primary text-light" type="submit">
            Save Profile
          </button>
        </form>
            </div>
        )
    }
}

export default withAuth(EditProfile);
