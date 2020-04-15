import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, members: [], notiInfo: [] };
  }
  getCreatorInfo = () => {
    console.log(this.props, "PROOOOOOPS");
    service
      .getNotiInfo()
      .then((res) => {
        this.setState({
          notiInfo: res.notifications,
        });
        console.log("Creator-info", res.notifications);
      })
      .catch((err) => {
        console.log("Error getting the creator", err);
      });
  };

  componentDidMount() {
    this.getCreatorInfo();
  }
  render() {
    
    console.log(this.props);
    return (
      <div className=" m-4">
        <h3 className ="text-center mb-5">Inbox</h3>
        <div>
          {this.state.notiInfo.map((noti) => {
            return (
              <div className ="row d-flex justify-content-center mb-3">
                <div><img className="profileImgNoti  mr-3" src={noti.creatorId.imageUrl} alt=""/></div>
                <div className="colorBgNoti align-content-center ">
                  <h5><b>{noti.creatorId.name} {noti.creatorId.lastName}</b></h5>
              <h5 className="colorTitleNoti"><i>{noti.eventId.title}</i></h5>
              <p className="messageNoti">{noti.message}</p>
              </div>

              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(Notifications);
