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
}
