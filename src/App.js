// ========== IMPORTS
import React, { Component } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";

// ========== DEFINITIONS
class App extends Component {
  // ========== STATES
  state = {
    username: "WaywardPooch",
    userInfo: {
      login: "",
      avatar_url: "",
    },
  };
  // ========== LIFECYCLE METHODS
  componentDidMount() {
    console.log("[APP] Mounted!");
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
  }
  componentDidUpdate() {
    console.log("[APP] Updated!");
  }

  // ========== MARKUP
  render() {
    const userInfo = this.state.userInfo;
    return (
      <div>
        <Navbar />
        <UserCard login={userInfo.login} avatar_url={userInfo.avatar_url} />
      </div>
    );
  }
}

// ========== EXPORTS
export default App;
