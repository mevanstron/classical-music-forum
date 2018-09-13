import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Category = props => {
  const filteredSubCategories = props.subCategories.filter(subCategory => subCategory.category_id == props.match.params.categoryId);
  const subCategoryList = filteredSubCategories.map(subCategory => <div key={subCategory.id}><Link to={`${props.match.url}/${subCategory.id}`}>{subCategory.title}</Link></div>);

  return (
    <div>
      {subCategoryList}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
      subCategories: state.forum.subCategories
  })
}

export default connect(mapStateToProps)(Category);
