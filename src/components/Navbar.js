import React, {Component} from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
  padding: 20px;
  text-align: center;
`;

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <h2>GitHub User Card</h2>
      </StyledNavbar>
    );
  }
}

export default Navbar;