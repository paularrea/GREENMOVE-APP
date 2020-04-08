
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Noticeboard extends Component {
  constructor() {
    super();
    this.state = { listOfEvents: [] };
  }

  getAllEvents = () => {
    axios.get(`http://localhost:4000/api/events`).then(responseFromApi => {
      this.setState({
        listOfEvents: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllEvents();
  }

  render() {
    return (
      <div><p>Noticeboard</p>
        <div>
          {this.state.listOfEvents.map(event => {
            return (
              <div key={event._id}>
                <Link to={`/private/events/${event._id}`}>
                    <img src={event.imageUrl} alt=""/>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
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