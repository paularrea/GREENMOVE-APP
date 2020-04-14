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
      members: [],
      
    };
  }
  handleSubmit = (e) => {
    const { params } = this.props.match;
   console.log(params.id, "id del evento") 
    console.log("USEEEEEEER ID :",this.props.user._id)
   
    e.preventDefault();
    service
    .addMember({eventId: params.id, userId: this.props.user._id })
    .then((res) => {
      this.props.history.push(`/private/modal/${this.state._id}`);
      console.log("Added", res);
    })
    .catch((err) => {
      console.log("Error while adding the thing:", err);
    });
    
  };

  getEvent = () => {
    const { params } = this.props.match;
    // console.log(params.id, "paramsEvent")
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
  getMembers = () => {
    const { params } = this.props.match;
    // console.log(params.id, "paramsEvent")
    axios
      .get(`http://localhost:4000/api/events/${params.id}`)
      .then((responseFromApi) => {
        const members = responseFromApi.data.members;
        this.setState({members: members});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEvent();
    this.getMembers();
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
      <div className ="p-3">
        <form onSubmit ={(e) => this.handleSubmit(e)} >
          
        <img className= "imgEvent" src={this.state.imageUrl} alt="" />
        <h1 className ="textDetails">{this.state.title}</h1>
        <p>{this.state.description}</p>
        <p>{this.state.duration}</p>
        <p>{this.state.street}</p>
        <p>{this.state.date}</p>
        <div className = "row pt-3">
          {this.state.members.map((member) => {
            return(
              
            <div>
              <div className = "col text-center">
                <img className="memberImg" src={member.imageUrl} alt="" />
                <h3 className="textMyEvent text-dark">{member.name}</h3>
              </div>
            </div>
            )
          }
          )}
        </div>
      
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

       <div className="text-center"><button className= "btn btn-primary" type = "submit" >Join Event</button></div>
        <Link to={"/private"}>Back to Events</Link>
        </form>
      </div>
    );
  }
}

export default withAuth(EventDetails);
