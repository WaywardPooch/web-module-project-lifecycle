import React, { Component } from "react";
import styled from "styled-components";

const StyledFollowerCard = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 35rem;

  div.body {
    align-items: center;
    display: flex;
    flex-flow: row wrap;

    div.image-container {
      img {
        border-radius: 50%;
        max-width: 8rem;
        object-fit: cover;
      }
    }
    div.text-container {
      margin-left: 2rem;
      text-align: left;
    }
  }
`;

class FollowerCard extends Component {
  render() {
    return (
      <StyledFollowerCard>
        <div className="body">
          <div className="image-container">
            <img alt="account avatar" src={this.props.avatar_url} />
          </div>
          <div className="text-container">
            <p>{this.props.login}</p>
          </div>
        </div>
      </StyledFollowerCard>
    );
  }
}

export default FollowerCard;
