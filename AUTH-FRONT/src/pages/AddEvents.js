import React, { Component } from "react";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import Map from "../components/Map"
class AddEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      street: "",
      postalCode: "",
      duration: "",
      date: "",
      materials: "",
      city: "",
      country: "",
      creator: this.props.user._id,
      coordinates: []
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })  
  };
  handleLatLng = (e) =>{
    this.setState({coordinates:e});
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
      .saveNewThing(this.state)
      .then((res) => {
        console.log("Added", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };
  render() {
    return (
      <div className="container-pages">
      <div className="createEvent pb-5 mb-5">
        <h2>New Event</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="idImage">Add Event Image</label>
            <input
              type="file"
              className="form-control"
              id="idImage"
              aria-describedby="image"
              placeholder="Event Image"
              onChange={(e) => this.handleFileUpload(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Title</label>
            <input
              className="form-control"
              id="idName"
              aria-describedby="Name"
              placeholder="Event Name"
              type="text"
              name="title"
              value={this.state.title || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idDescription">Description</label>
            <textarea
              className="form-control"
              id="idDescription"
              aria-describedby="Description"
              placeholder="Event Description"
              type="text"
              name="description"
              value={this.state.description || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label htmlFor="idDate">Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            id="idDate"
            value={this.state.date || ''}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="idTime">Time</label>
          <input
            className="form-control"
            type="time"
            name="duration"
            id="idTime"
            value={this.state.duration || ''}
            onChange={(e) => this.handleChange(e)}
          />
        <label  htmlFor="idTime"> <b className ="text-center">Set the Location</b> </label>
        <Map updateLatLng = {e=> this.handleLatLng(e)} coordinates= {this.state.coordinates}/>
      <div className ="text-center">
      <button className="text-center btn btn-primary text-light" type="submit">
            Create Event
          </button>
          </div>
        </form>
        </div>
        </div>
    );
  }
}
export default withAuth(AddEvents);