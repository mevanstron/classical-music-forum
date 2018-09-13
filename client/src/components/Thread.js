import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../containers/PostForm';
import uuid from 'uuid';



const Thread = props => {
  const filteredPosts = props.posts.filter(post => post.thread_id === props.match.params.threadId)
  const postList = filteredPosts.map(post => <div key={post.id}>{post.content}<hr /></div>)

  return (
    <div>
      <div>{postList}</div>
      <h3>Your post:</h3>
      <PostForm uuid={uuid()} thread_id={props.match.params.threadId} />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    posts: state.forum.posts
  })
}

export default connect(mapStateToProps)(Thread);
