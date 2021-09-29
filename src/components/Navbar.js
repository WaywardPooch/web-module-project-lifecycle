import React, { Component } from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: ${(props) => props.theme.dark};
  padding: 20px;
  text-align: center;

  div.body {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 800px;

    h2 {
      color: ${(props) => props.theme.light};
    }
    form {
      input {
        &[type="text"] {
          background-color: ${(props) => props.theme.light};
          border: none;
          color: ${(props) => props.theme.black};
          font-size: 2rem;
          padding: 0.6rem;
          text-align: center;
        }
      }
      button {
        background-color: ${props => props.theme.secondary};
        border: none;
        color: ${props => props.theme.light};
        font-size: 2rem;
        padding: 0.6rem 2rem;
        transition: 300ms;

        &:hover {
          background-color: ${(props) => props.theme.black};
          color: ${(props) => props.theme.light};
        }
      }
    }
  }
`;

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <div className="body">
          <h2>GitHub User Card</h2>
          <form onSubmit={this.props.handleSearchSubmit}>
            <input
              type="text"
              onChange={this.props.handleSearchInput}
              placeholder="Search Username"
            />
            <button>Search</button>
          </form>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
