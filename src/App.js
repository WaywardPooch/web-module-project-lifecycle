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

  section.followers-container {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    max-width: 80rem;

    h2 {
      padding-top: 3rem;
      text-align: center;
      width: 100%;
    }
  }
`;

// ========== DEFINITIONS
class App extends Component {
  // ========== STATES
  state = {
    username: "",
    userInfo: {
      login: "",
      avatar_url: "",
    },
    followers: [],
  };

  // ========== LIFECYCLE METHODS
  componentDidMount() {
    console.log("[APP] Mounted!");
    this.updateUserInfo("WaywardPooch");
    this.updateUserFollowers("WaywardPooch");
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
  
  // ========== EVENT HANDLERS
  handleSearchInput = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  };
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.updateUserInfo(this.state.username);
    this.updateUserFollowers(this.state.username);
  };

  // ========== MARKUP
  render() {
    const userInfo = this.state.userInfo;
    return (
      <StyledApp>
        {/* Header */}
        <Navbar
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        {/* Top Section */}
        <section className="featured-user-container">
          <UserCard login={userInfo.login} avatar_url={userInfo.avatar_url} />
        </section>

        {/* Body Section */}
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
