import React, { Component } from "react";
import styled from "styled-components";

const StyledUserCard = styled.div`
  align-items: center;
  background-color: ${props => props.theme.primary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: auto;
  padding-top: 4rem;

  h2 {
    color: ${props => props.theme.light};
    font-size: 3.2rem;
    font-weight: 400;
    padding: 2rem 0 3rem 0;
    text-align: center;
  }
  img {
    border: 0.5rem solid ${props => props.theme.light};
    border-radius: 50%;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2);
    max-width: 20rem;
    object-fit: cover;
  }
`;

class UserCard extends Component {
  render() {
    return (
      <StyledUserCard>
        <img alt="account avatar" src={this.props.avatar_url} />
        <h2>{this.props.login}</h2>
      </StyledUserCard>
    );
  }
}

export default UserCard;
