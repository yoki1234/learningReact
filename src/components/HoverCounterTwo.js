import React, { Component } from "react";

class HoverCounterTwo extends Component {
 

  render() {
    const {count,incrementCount} = this.props
    return <h1 onMouseOver={incrementCount}>HoverOver {count} Times</h1>;
  }
}

export default HoverCounterTwo;
