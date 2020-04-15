import React, { Component } from "react";
import service from "../api/service";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      members: [],
      creator: "",
      notifications: "",
      eventId:"" 
    };
  }
  
  handleSubmit = (e) => {
      e.preventDefault();
      service
      .addMessage(this.state)
      .then((res) => {
          console.log("Sended", res);
        })
        .catch((err) => {
            console.log("Error while adding the thing:", err);
        });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        console.log( this.props.members, this.state.notifications, "holaaaaaaNotifications");
        this.setState({ [name]: value, eventId: this.props.eventId, members: this.props.members });
      };
    render() {
     
      
    
     if (this.props.creator === this.props.userId) { //console.log(result);
    return (
      <form onSubmit ={(e)=> this.handleSubmit(e)}>
        <div className="text-center">
          <div>
            <div className="text-right m-3 ">
              <button className="btn btn-warning btnDetails text-light">
                Send it!
              </button>
            </div>
            <div className="textAreaCreator mb-3">
              <textarea
                name="notifications"
                value={this.state.notifications}
                onChange={(e) => this.handleChange(e)}
                placeholder="escribe un mensaje..."
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    );  
     }else{
         return(<div></div>)
     }
  }
}
export default Message;
