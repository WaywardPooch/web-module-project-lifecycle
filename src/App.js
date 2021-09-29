// ========== IMPORTS
// Libraries
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
// Styles
import "./styles/general.css";
// Components
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

// ========== STYLED COMPONENTS
const StyledApp = styled.div`
  background-color: ${(props) => props.theme.light};
  margin: auto;
  min-height: 100vh;
  text-align: center;
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
    this.updateUserInfo(this.state.username);
    this.updateUserFollowers(this.state.username);
  }
  componentDidUpdate() {
    console.log("[APP] Updated!");
  }

  // ========== HELPERS
  updateUserInfo(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        this.setState({
          ...this.state,
          userInfo: response.data,
        });
      })
      .catch((error) => {
        console.error("Could not fetch user data! Message:", error);
      });
  }
  updateUserFollowers(username) {
    axios
      .get(`https://api.github.com/users/${username}/followers`)
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

  // ========== MARKUP
  render() {
    const userInfo = this.state.userInfo;
    return (
      <StyledApp>
        <Navbar />
        <section className="featured-user-container">
          <UserCard login={userInfo.login} avatar_url={userInfo.avatar_url} />
        </section>
        <section className="followers-container">
          <h2>Followers:</h2>
          {this.state.followers.map((follower) => {
            return (
              <FollowerCard
                login={follower.login}
                avatar_url={follower.avatar_url}

              />
            );
          })}
        </section>
      </StyledApp>
    );
  }
}

// ========== EXPORTS
export default App;
