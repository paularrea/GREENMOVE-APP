import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider"; //	<-- UPDATE HERE

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }
  render() {
  
    return (
      <nav >
        <div className="btn-group-active row d-flex justify-content-center " data-toggle="buttons" role="group" aria-label="Basic example">
          <div className="m-2">
        <Link to="/private/my-actions">
  <button type="radio" id="1" className="btn btn-primary">My Actions</button>
  </Link>
  </div>
  <div className="m-2">
  <Link to="/private/join-actions">
  <button type="radio" id="2"className="btn btn-primary">Join Actions</button>
  </Link>
  </div>
</div>
      </nav>
    );
  }
}

export default withAuth(AllEvents);
