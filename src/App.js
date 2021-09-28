// ========== IMPORTS
import React, { Component } from "react";

// ========== DEFINITIONS
class App extends Component {
  // ========== STATES
  state = {
    test: "test"
  }
  // ========== LIFECYCLE METHODS
  componentDidMount() {
    console.log("[APP] Mounted!");
  }
  componentDidUpdate() {
    console.log("[APP] Updated!");
  }

  // ========== MARKUP
  render() {
    return (
      <div>
        <h1>GitHub User Card App</h1>
        <p>Test State Value: "{this.state.test}"</p>
      </div>
    );
  }
}

// ========== EXPORTS
export default App;
