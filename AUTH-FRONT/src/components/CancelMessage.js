import React, { Component } from "react";
import service from "../api/service";
import axios from "axios";

class CancelMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      members: [],
      creator: "",
      notifications: "",
      eventId: "",
      eventTitle: "",
      redirect: false,
    };
  }

  handleSubmitCancel = (e) => {
    e.preventDefault();
    service
      .addMessage(this.state)
      .then((res) => {
        console.log("CancelMessage sent", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing:", err);
      });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(
      this.props.members,
      this.state.notifications,
      "holaaaaaaNotifications"
    );
    this.setState({
      [name]: value,
      eventId: this.props.eventId,
      members: this.props.members,
      creator: this.props.creator,
    });
  };

  deleteAction = () => {
    const eventId = this.state.eventId;

    axios
      .delete(process.env.REACT_APP_API_URI + `/api/events/${eventId}`)
      .then(() => {
        // this.props.history.push("/private");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log(this.props, "event title");

    if (this.props.creator === this.props.userId) {
      //console.log(result);
      return (
        <form onSubmit={(e) => this.handleSubmitCancel(e)}>
          <div className="text-center ">
            <div>
              <div className="textAreaCreator m-3">
                <p
                  name="notifications"
                  value={`${this.props.eventTitle} is canceled`}
                ></p>
              </div>
              <div className="text-center m-3 ">
                <button
                  onClick={() => this.deleteAction()}
                  className="btn btnOrange"
                >
                  Send it!
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return <div></div>;
    }
  }
}
export default CancelMessage;
