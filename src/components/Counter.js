import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super()
        this.state={
            count:0,
        }
    }
    incrementCount =()=>{
        this.setState(prevstate=>{
            return {count:prevstate.count +1}
        })
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementCount)}
      </div>
    )
  }
}

export default Counter
