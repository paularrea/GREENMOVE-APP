import React, { Component } from "react";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import Map from "../components/Map";

class AddEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      descriptionProblem: "",
      descriptionSolution: "",
      imageUrl: "",
      street: "",
      postalCode: "",
      duration: "",
      date: "",
      materials: "",
      city: "",
      country: "",
      location: "",
      creator: this.props.user._id,
      coordinates: [],
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleLatLng = (e) => {
    this.setState({ coordinates: e });
  };
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is :", e.target.files);
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
        this.props.history.push("/private/modal-create");
        console.log("Added", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };

  render() {
    return (
      <div className="container-pages p-3">
        <div className="createEvent pb-5 mb-5">
          <h2>New Event</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
            <label htmlFor="idTime">
              {" "}
              <b className="text-center">Set the Location</b>{" "}
            </label>
            <Map
              updateLatLng={(e) => this.handleLatLng(e)}
              coordinates={this.state.coordinates}
            />
              <label className="pt-3" htmlFor="idImage">Add Event Image</label>
              <input
              required
                type="file"
                className="form-control formadd"
                id="idImage"
                aria-describedby="image"
                placeholder="Event Image"
                onChange={(e) => this.handleFileUpload(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idName">Title</label>
              <input
              required
                className="form-control formadd"
                id="idName"
                aria-describedby="Name"
                placeholder="Event Name"
                type="text"
                name="title"
                value={this.state.title || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idDescriptionProblem">Problem</label>
              <textarea
              required
                className="form-control formadd"
                id="idDescriptionProblem"
                aria-describedby="Description"
                placeholder="What is the problem?"
                type="text"
                name="descriptionProblem"
                value={this.state.descriptionProblem || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="idDescriptionSolution">Solution</label>
              <textarea
              required
                className="form-control formadd"
                id="idDescriptionSolution"
                aria-describedby="DescriptionSol"
                placeholder="What is your solution?"
                type="text"
                name="descriptionSolution"
                value={this.state.descriptionSolution || ""}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <label htmlFor="idDate">Date</label>
            <input
            required
              className="form-control formadd"
              type="date"
              name="date"
              id="idDate"
              value={this.state.date || ""}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <label htmlFor="idTime">Time</label>
            <input
            required
              className="form-control formadd"
              type="time"
              name="duration"
              id="idTime"
              value={this.state.duration || ""}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="idLocation">Location</label>
            <input
            required
              className="form-control formadd"
              type="text"
              name="location"
              id="idLocation"
              value={this.state.location || ""}
              onChange={(e) => this.handleChange(e)}
            />
           
            <div className="text-center pt-5">
              <button
                className="text-center btn btnBlue formadd"
                type="submit"
              >
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
