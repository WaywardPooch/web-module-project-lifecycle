import React, { Component } from "react";
import styled from "styled-components";

const StyledUserCard = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 3rem;
  margin: auto;
  max-width: 400px;

  div.body {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    h2 {
      padding-bottom: 2rem;
      text-align: center;
    }
    img {
      border-radius: 50%;
      max-width: 80%;
      object-fit: cover;
    }
  }
`;

class UserCard extends Component {
  render() {
    return (
      <StyledUserCard>
        <div className="body">
          <h2>User: {this.props.login}</h2>
          <img src={this.props.avatar_url} />
        </div>
      </StyledUserCard>
    );
  }
}

export default UserCard;
