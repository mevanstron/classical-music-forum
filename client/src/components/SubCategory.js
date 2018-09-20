import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ThreadForm from '../containers/ThreadForm';

const SubCategory = props => {
  const subCategory = props.forum.subCategories.find(subCategory => subCategory.path === props.match.params.subCategoryPath)
  const category = props.forum.categories.find(category => category.id.toString() === subCategory.category_id)
  const filteredThreads = props.forum.threads.filter(thread => thread.sub_category_id === subCategory.id.toString())
  const threadList = filteredThreads.map(thread => <div key={thread.id}><Link to={`${props.match.url}/${thread.id}`}>{thread.title}</Link></div>)

  const breadcrumbs = <div className="breadcrumbs">
    <Link to="/">Forum</Link> &gt;
    <Link to={`/${category.path}`}> {category.title}</Link>
  </div>



  return (
    <div>
      {breadcrumbs}
      {threadList}
      <h3>New Thread</h3>
      <ThreadForm sub_category_id={subCategory.id} />
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    forum: state.forum
  })
}

export default connect(mapStateToProps)(SubCategory);
