import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
    //    this.clickHandler=this.clickHandler.bind(this)
  }
  //   clickHandler(){
  //     this.setState({
  //         isLoggedIn: true
  //     })
  //   }

  render() {
     return this.state.isLoggedIn && <div>welcome Akshay</div> //short circute


    // return this.state.isLoggedIn ? (
    //   <div>welcome Akshay</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Vishwas</div>
    // }else{
    //     message=<div>Welcome Guest</div>
    // }

    // return (
    // <div>
    //     {message}
    //     <button onClick={this.clickHandler}>click here to log in</button>

    // </div>
    // )

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Akshay</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
