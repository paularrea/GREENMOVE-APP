import React, { Component } from "react";

class BottonJoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      members: [],
    };
  }

  render() {
    let result = this.props.members.findIndex(
      (user) => user._id === this.props.userId
    );
    //console.log(result);

    return (
      <div>
        {result > -1 ? (
          <button className="btn btn-dark">Unjoin</button>
        ) : (
          <button className="btn btn-danger">join</button>
        )}
      </div>
    );
  }
}

export default BottonJoin;
