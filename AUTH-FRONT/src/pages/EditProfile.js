import React, { Component } from 'react'
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from 'react-router';
// import axios from "axios";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          redirect: false,
          user:{}
        };
    }
    
    // getProfile = () => {
    //   axios.get(`http://localhost:4000/api/profile`).then(responseFromApi => {
    //     console.log("responseeeeeee",responseFromApi.data[0])
    //     this.setState({
    //       user: responseFromApi.data[0]
    //     });
    //   });
    // };
  
    // componentDidMount() {
    //   this.getProfile(this.state.user);
    //   this.setState(this.props.user)
    // }
    
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
        this.setState({ redirect: true })
        console.log("Edited!", res);
        
      })
      .catch((err) => {
        console.log("Error while editing the profile:", err);
      });
      
    };
    
    componentDidMount = () => {
      this.setState(this.props.user)
    }
      handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( {[name]: value })
        
        
      };

    render() {
      const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/private/my-profile'/>;
     }
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
              placeholder={this.state.imageUrl}
              onChange={(e) => this.handleFileUpload(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Name</label>
            <input
              className="form-control"
              id="idName"
              aria-describedby="Name"
              placeholder={this.state.name}
              type="text"
              name="name"
              value={this.state.name || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Lastname</label>
            <input
              className="form-control"
              id="idLastName"
              aria-describedby="Lastname"
              placeholder={this.state.lastName}
              type="text"
              name="lastName"
              value={this.state.lastName || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idSobreMi">Sobre Mi</label>
            <textarea
              className="form-control"
              id="idSobremi"
              aria-describedby="Sobremi"
              placeholder={this.state.sobreMi}
              type="text"
              name="sobreMi"
              value={this.state.sobreMi || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
    
          <button  className="btn btn-primary text-light" type="submit">
            Save Profile
          </button>
          
        </form>
            </div>
        )
    }
}

export default withAuth(EditProfile);
