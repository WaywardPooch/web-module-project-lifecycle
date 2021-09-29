import React, { Component } from "react";
import styled from "styled-components";

const StyledFollowerCard = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;

  div.body {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    h2 {
      padding-bottom: 2rem;
      text-align: center;
    }
    img {
      border-radius: 50%;
      max-width: 20%;
      object-fit: cover;
    }
  }
`;

class FollowerCard extends Component {
  render() {
    return (
      <StyledFollowerCard>
        <div className="body">
          <img alt="account avatar" src={this.props.avatar_url} />
          <p>Follower Name: {this.props.login}</p>
        </div>
      </StyledFollowerCard>
    );
  }
}

export default FollowerCard;
