import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = ()  => dispatch => {
  // console.log('fetching')
  fetch('http://slack-server.elasticbeanstalk.com/messages')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(posts => 
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  console.log('creating post')
  fetch('http://slack-server.elasticbeanstalk.com/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => 
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
