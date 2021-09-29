import React, { Component } from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: ${(props) => props.theme.dark};
  padding: 20px;
  text-align: center;

  div.body {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 800px;

    h2 {
      color: ${(props) => props.theme.light};
    }
    input {
      &[type=text] {
        background-color: ${(props) => props.theme.light};
        border: none;
        color: ${(props) => props.theme.black};
        font-size: 1.8rem;
        text-align: center;
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
          <input type="text" placeholder="Search Username"/>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
