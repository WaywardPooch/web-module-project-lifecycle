// ========== IMPORTS
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import "./styles/general.css";

import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

// ========== STYLED COMPONENTS
const StyledApp = styled.div`
  background-color: ${(props) => props.theme.light};
  min-height: 100vh;
`;

// ========== DEFINITIONS
class App extends Component {
  // ========== STATES
  state = {
    username: "WaywardPooch",
    userInfo: {
      login: "",
      avatar_url: "",
    },
    followers: [],
  };
  // ========== LIFECYCLE METHODS
  componentDidMount() {
    console.log("[APP] Mounted!");

    // Get user info
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        this.setState({
          ...this.state,
          userInfo: response.data,
        });
      })
      .catch((error) => {
        console.error("Could not fetch user data! Message:", error);
      });

    // Get follower info
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((response) => {
        this.setState({
          ...this.state,
          followers: response.data,
        });
      })
      .catch((error) => {
        console.error("Could not fetch followers data! Message:", error);
      });
  }
  componentDidUpdate() {
    console.log("[APP] Updated!");
  }

  // ========== MARKUP
  render() {
    const userInfo = this.state.userInfo;
    return (
      <StyledApp>
        <Navbar />
        <UserCard login={userInfo.login} avatar_url={userInfo.avatar_url} />
        {this.state.followers.map((follower) => {
          return (
            <FollowerCard
              login={follower.login}
              avatar_url={follower.avatar_url}
            />
          );
        })}
      </StyledApp>
    );
  }
}

// ========== EXPORTS
export default App;
