import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class JoinEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      joinAccions: [],
      user: {},
    };
  }
  getProfile = () => {
    console.log(this.props.user._id);
    axios
      .get(process.env.REACT_APP_API_URI+`/api/join-events/${this.props.user._id}`)
      .then((responseFromApi) => {
        console.log("responseeeeeee", responseFromApi.data);

        this.setState({
          joinAccions: responseFromApi.data.joinAccions,
        });
      });
  };

  componentDidMount() {
    this.setState({ user: this.props.user });
    this.getProfile();
  }

  render() {
    const isLoadingJoin = this.state.joinAccions === 0 ? true : false;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/private/my-profile" />;
    } else if (isLoadingJoin) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="pt-3 m-3">
          <nav>
            <div
              className="btn-group-active row d-flex justify-content-center "
              data-toggle="buttons"
              role="group"
              aria-label="Basic example"
            >
              <div className="m-2">
                <Link to="/private/my-actions">
                  <button type="radio" id="1" className="btn btn-primary">
                    My Actions
                  </button>
                </Link>
              </div>
              <div className="m-2">
                <Link to="/private/join-actions">
                  <button type="radio" id="2" className="btn btn-dark">
                    Join Actions
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          {this.state.joinAccions.map((event) => {
            return (
              <div>
                <Link to={`/private/events/${event._id}`}>
                  <img className="imgMyEvent" src={event.imageUrl} alt="" />
                  <h3 className="textMyEvent text-dark">{event.title}</h3>
                  <p className="text-dark">{event.location}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  }
}
export default withAuth(JoinEvents);
