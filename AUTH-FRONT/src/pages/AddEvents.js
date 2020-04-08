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
      number: "",
      city: "",
      creator: this.props.user._id,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

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
  //this method submits the form
  handleSubmit = (e) => {
    e.preventDefault();
    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("Added", res);
        // here you'd want to redirect
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };
  render() {
    return (
      <div className="createEvent pb-5 mb-5">
        <h2>New Event</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label for="idImage">Add Event Image</label>
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
            <label for="idName">Name</label>
            <input
              className="form-control"
              id="idName"
              aria-describedby="Name"
              placeholder="Event Name"
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="idDescription">Description</label>
            <textarea
              className="form-control"
              id="idDescription"
              aria-describedby="Description"
              placeholder="Event Description"
              type="text"
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <label for="idAddress">Address</label>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                id="idAddress"
                aria-describedby="Address"
                placeholder="Street"
                type="text"
                name="street"
                value={this.state.street}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                id="idAddress"
                aria-describedby="Address"
                placeholder="Number"
                type="text"
                name="number"
                value={this.state.number}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                id="idAddress"
                aria-describedby="Address"
                placeholder="City"
                type="text"
                name="city"
                value={this.state.city}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                id="idAddress"
                aria-describedby="Address"
                placeholder="Postal Code"
                type="text"
                name="postalCode"
                value={this.state.postalCode}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>
          <label for="idDate">Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            id="idDate"
            value={this.state.date}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button className="btn btn-primary text-light" type="submit">
            Create Event
          </button>
        </form>
        <Map/>
      </div>
    );
  }
}
export default withAuth(AddEvents);
