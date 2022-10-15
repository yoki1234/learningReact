import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errorMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response=>{
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error=>{
            console.log(error);
            this.setState({errorMsg:'Something went worng!'})
        })
    }
    
  render() {
    const {post,errorMsg}=this.state
    return (
      <div>
        <h2>List of posts</h2>
        {
            post.length?
            post.map(post => <div key={post.id}>{post.title}</div>):
            null
        }
        {errorMsg ? <div> {errorMsg} </div>:null}
      </div>
    )
  }
}

export default PostList
