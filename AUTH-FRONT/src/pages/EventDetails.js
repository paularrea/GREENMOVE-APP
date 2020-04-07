
import React, { Component } from "react";
import axios from "axios";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:4000/api/events/${params.id}`)
      .then(responseFromApi => {
        const event = responseFromApi.data;
        this.setState(event);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
        <div>
            <img src={this.state.imageUrl} alt="" />
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
    
      </div>
    );
  }
}

export default EventDetails;
