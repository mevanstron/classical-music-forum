import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Category = props => {
  const category = props.forum.categories.find(category => category.path === props.match.params.categoryPath);
  const filteredSubCategories = props.forum.subCategories.filter(subCategory => subCategory.category_id === category.id.toString());
  const subCategoryList = filteredSubCategories.map(subCategory => <div key={subCategory.id}><Link to={`${props.match.url}/${subCategory.path}`}>{subCategory.title}</Link></div>);

  const breadcrumbs = <div className="breadcrumbs"><Link to="/">Forum</Link></div>

  return (
    <div>
      {breadcrumbs}
      {subCategoryList}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
      forum: state.forum
  })
}

export default connect(mapStateToProps)(Category);
