import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import service from "../api/service";
import { withAuth } from "../lib/AuthProvider";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      members: [this.props.user._id]
    };
  }
  handleSubmit = (e) => {
    console.log("USEEEEEEER ID :",this.props.user._id)
    e.preventDefault();
    service
      .addMember(this.state.members)
      .then((res) => {
        console.log("Added", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };

  getEvent = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/events/${params.id}`)
      .then((responseFromApi) => {
        const event = responseFromApi.data;
        this.setState(event);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEvent();
  }

  render() {
    let position = this.state.coordinates;
    console.log(position)
    const icon = L.icon({
      iconUrl: require(`../img/map-marker-alt-solid.svg`),
      iconSize: [24, 36],
      iconAnchor: [12, 36],
      popupAnchor: [0, -25],
    });
    return (
      <div className ="pt-3">
        <button type = "submit" onClick={(e) => this.handleSubmit(e)}>Join Event</button>
        <img className= "imgEvent" src={this.state.imageUrl} alt="" />
        <h1 className ="textDetails">{this.state.title}</h1>
        <p>{this.state.description}</p>
        <p>{this.state.duration}</p>
        <p>{this.state.street}</p>
        <p>{this.state.date}</p>

        <Map center={position} zoom={25}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {position.length > 0 && (
            <Marker position={position} icon={icon} draggable={false}>
              <Popup>
                {this.state.title}
                <br />
                {this.state.duration}
              </Popup>
            </Marker>
          )}
        </Map>

        <Link to={"/private"}>Back to Events</Link>
      </div>
    );
  }
}

export default withAuth(EventDetails);
