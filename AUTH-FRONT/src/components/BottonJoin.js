import React, { Component } from "react";

class BottonJoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      members: [],
      creator:"",
      notifications:""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state.notifications, "holaaaaaaNotifications")
    this.setState({ [name]: value });
  };
  

  render() {
    let result = this.props.members.findIndex(
      (user) => user._id === this.props.userId
    );
    //console.log(result);

    {if(result > -1){
      return (
        <div>
          <button className="btn btn-dark">Unjoin</button>
          </div>)

        } else if(this.props.userId === this.props.creator){
          return(<form>
            <div className ="text-center">
              <div>
            <div className ="mb-3">
            <button className="btn btn-warning" type="submit">Send</button>
            </div>
                <div className="textAreaCreator mb-3">
            <textarea name="notifications" value={this.state.notifications} onChange={(e) => this.handleChange(e)} placeholder="escribe un mensaje..."></textarea>
            </div>
            </div>
            </div>
          </form>)
        }
        else{
          return(<div><button className="btn btn-danger">join</button></div>)
          
          

        }
        }
  }
}

export default BottonJoin;
