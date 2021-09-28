import React, { Component } from "react";

class FollowerCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar_url} />
        <p>Follower Name: {this.props.login}</p>
      </div>
    );
  }
}

export default FollowerCard;
