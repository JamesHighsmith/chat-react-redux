import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created_by: '',
      message: '' 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // https://stackoverflow.com/questions/45624780/e-target-value-on-an-input-field-reactjs-how-does-it-work
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      created_by:  this.state.created_by,
      message: this.state.message
    };
    this.props.createPost(post);
  }

  render() {
    
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={ this.onSubmit }>
          <div>
            <label>Name: </label>
            <br />
            <input 
              type="text" 
              name="created_by" 
              onChange={ this.onChange } 
              value={ this.state.created_by } 
            />
          </div>
          <br />
          <div>
            <label>Message: </label>
            <br />
            <textarea 
              type="text" 
              name="message" 
              onChange={this.onChange} 
              value={this.state.message} 
              />
          </div>
          <br />
          <button type="submit" name="btn">Submit</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);