import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      MyActions: [],
      user: {},
    };
  }
  getProfile = () => {
    console.log(this.props.user._id);
    axios
      .get(`http://localhost:4000/api/my-events/${this.props.user._id}`)
      .then((responseFromApi) => {
        console.log("responseeeeeee", responseFromApi.data);
        
        this.setState({
          MyActions: responseFromApi.data.myAccions,
        });
      });
  };

  componentDidMount() {
    this.setState({ user: this.props.user });
    this.getProfile();
  }

  render() {
    const isLoading = this.state.MyActions === 0 ? true : false;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/private/my-profile" />;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className = "pt-3">
          {this.state.MyActions.map((event) => {
            return(
            <div key={event._id}>
              <Link to={`/private/events/${event._id}`}>
                <img className="imgMyEvent" src={event.imageUrl} alt="" />
                <h3 className="textMyEvent text-dark">{event.title}</h3>
                <p className="text-dark">{event.description}</p>
              </Link>
            </div>
            )
          }
          )}
        </div>
      );
    }
  }
}
export default withAuth(MyEvents);
