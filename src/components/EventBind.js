import React, { Component } from 'react'

class EventBind extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        message:'Hello'
     }
     this.clickHandler = this.clickHandler.bind(this) //fourth approch
   }
//    clickHandler =()=> {
//     this.setState({                          //first approch
//         message:'Bye'
//     })
//    }
   clickHandler(){
    this.setState({
        message:'Good-Bye!'  
    })
   }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler}>Click</button>        first approch */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button> {/*fourth approch*/}
        
      </div>
    )
  }
}

export default EventBind

