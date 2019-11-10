import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    // console.log(123)
    fetch('http://slack-server.elasticbeanstalk.com/messages')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => this.setState({posts: data}));
  }

  render() {
    const postItems = this.state.posts.map(post => ( 
    // ! these chat items from JSON need to match the incoming kv names:
      <div key={post._id}>
        <h3>{post.created_by}</h3>
        <p>{post.message}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    );
  }
}


export default Posts;