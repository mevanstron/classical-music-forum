import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostForm from '../containers/PostForm';

const Thread = props => {
  const thread = props.forum.threads.find(thread => thread.id.toString() === props.match.params.threadId)
  const subCategory = props.forum.subCategories.find(subCategory => subCategory.id.toString() === thread.sub_category_id)
  const category = props.forum.categories.find(category => category.id.toString() === subCategory.category_id)
  const filteredPosts = props.forum.posts.filter(post => post.thread_id === props.match.params.threadId)
  const postList = filteredPosts.map(post => <div className="post" key={post.id}>{post.content}<hr /></div>)

  const breadcrumbs = <div className="breadcrumbs">
    <Link to="/">Forum</Link> &gt;
    <Link to={`/${category.path}`}> {category.title}</Link> &gt;
    <Link to={`/${category.path}/${subCategory.path}`}> {subCategory.title}</Link>
  </div>


  return (
    <div>
      {breadcrumbs}
      {postList}
      <h3>Your post:</h3>
      <PostForm thread_id={props.match.params.threadId} />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    forum: state.forum
  })
}

export default connect(mapStateToProps)(Thread);
