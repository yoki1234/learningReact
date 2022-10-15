import React, { Component } from "react";
import withCounter from "./withCounter";
// import UpdateComponent from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <h2 onMouseOver={incrementCount}> Hover {count} Times</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
