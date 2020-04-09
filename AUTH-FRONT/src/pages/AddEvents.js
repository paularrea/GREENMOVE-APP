import React, { Component } from "react";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";
import Mapa from "../components/Map"
import axios from "axios";
import axiosRequestFunctions from "../lib/auth-service";

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
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let latlng = e.target.getLatLng()
    console.log("la 2999999",latlng)
    this.setState({coordinates:[latlng.lat, latlng.lng]});
  }
 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
    
  };

  handleSearch = (e) => {
    const { name, value } = e.target;
    if(name=="city"){
      axios.get(`https://nominatim.openstreetmap.org/search.php?format=json&q=${value}%20${this.state.country}%20${this.state.postalCode}%20${this.state.street}`)
      .then(responseFromApi => {
        console.log(responseFromApi)
        
        this.setState({ coordinates:[Number(responseFromApi.data[0].lat), Number(responseFromApi.data[0].lon)]})
         console.log("aquiiiiiii",this.state.coordinates)
      })
    }else{
      alert('hay un error')
    }
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
            <label for="idName">Title</label>
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
                id="idcountry"
                aria-describedby="Address"
                placeholder="Country"
                type="text"
                name="country"
                value={this.state.country}
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
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                id="idcity"
                aria-describedby="Address"
                placeholder="City"
                type="text"
                name="city"
                value={this.state.city}
                onChange={(e) => this.handleChange(e)}
                onBlur={(e) => this.handleSearch(e)}
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
          <label for="idTime">Time</label>
          <input
            className="form-control"
            type="time"
            name="duration"
            id="idTime"
            value={this.state.duration}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="btn btn-primary text-light" type="submit">
            Create Event
          </button>
        </form>
        
        <Mapa updateCoordinates = {this.handleClick} coordinates= {this.state.coordinates} title = {this.state.title} duration = {this.state.duration}/>
      </div>
    );
  }
}
export default withAuth(AddEvents);
