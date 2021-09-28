import React, { Component } from "react";
import styled from "styled-components";

class UserCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar_url}/>
        <p>Username: {this.props.login}</p>
      </div>
    );
  }
}

export default UserCard;