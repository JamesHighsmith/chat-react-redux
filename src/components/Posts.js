import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => ( 
    // // ! these chat items from JSON need to match the incoming kv names:
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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);