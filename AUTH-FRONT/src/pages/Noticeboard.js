import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import locationLogo from "../img/map-marker-alt-solid.png";
import membersLogo from "../img/user-friends-solid.png";

class Noticeboard extends Component {
  constructor() {
    super();
    this.state = { listOfEvents: [] };
  }
  getAllEvents = () => {
    axios.get(process.env.REACT_APP_API_URI+`/api/events`).then((responseFromApi) => {
      this.setState({
        listOfEvents: responseFromApi.data,
      });
    });
  };
  componentDidMount() {
    this.getAllEvents();
  }
  render() {
   
    return (
      <div className="pt-4 ">
        <h3 className ="text-center mb-4">Explore</h3>
        <div>
          {this.state.listOfEvents.map((event) => {
            return (
              <div key={event._id} className="">
                <Link to={`/private/events/${event._id}`}>
              
                  <div className="text-noticeboard">
                    <h4 className="text-dark ml-2">{event.title}</h4>
                    <img className="imgEvent" src={event.imageUrl} alt="" />
                    <div className="row justify-content-between texto-explore">
                    <div className=" d-flex align-items-center ml-3">
                      <img className="logo-notice" src={locationLogo} alt="" />
                      <p className="text-dark m-0 ml-2">{event.location}</p>
                    </div>
                    <div className="d-flex align-items-center mr-3">
                      <img className="logo-notice" src={membersLogo} alt="" />
                      <p className="text-dark m-0 ml-2">{event.members.length}</p>
                    </div>
                    </div>
                  </div>
                 
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{event.description} </p> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Noticeboard;
