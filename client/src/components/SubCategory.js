import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ThreadForm from '../containers/ThreadForm';
import uuid from 'uuid';

const SubCategory = props => {
  const filteredThreads = props.threads.filter(thread => thread.sub_category_id === props.match.params.subCategoryId)
  const threadList = filteredThreads.map(thread => <div key={thread.id}><Link to={`${props.match.url}/${thread.id}`}>{thread.title}</Link></div>)
  return (
    <div>
      <div>{threadList}</div>
      <h3>New Thread</h3>
      <ThreadForm uuid={uuid()} sub_category_id={props.match.params.subCategoryId} />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    threads: state.forum.threads
  })
}

export default connect(mapStateToProps)(SubCategory);
