import React, { Component } from "react";
import service from "../api/service";
class AddThing extends Component {
  state = {
    title: "",
    description: "",
    street: "",
    postalCode:"",
    duration: "",
    date: "",
    materials : ""
  };
  handleChange = e => {
      const {name, value} = e.target;
      this.setState({[name]: value});
  };
 
  handleFileUpload = e => {
      console.log("The file to be uploaded is :", e.target.files[0])
      const uploadData = new FormData()
      uploadData.append("imageUrl", e.target.files[0])
      service.handleUpload(uploadData)
      .then(response => {
          this.setState({imageUrl: response.secure_url});
      })
      .catch(err =>{
          console.log("Error while uploading the file:", err)
      })
  }
  //this method submits the form
  handleSubmit = e => {
      e.preventDefault();
      service.saveNewThing(this.state)
      .then(res => {
          console.log("Added", res);
          // here you'd want to redirect
      })
      .catch(err =>{
          console.log("Error while adding the thing:", err);
      })
  }
  render() {
    return (
      <div>
        <h2>New Event</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Add Event Image</label>
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <label>Name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={this.state.street}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={this.state.postalCode}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit">Save new thing</button>
        </form>
      </div>
    );
  }
}
export default AddThing;
