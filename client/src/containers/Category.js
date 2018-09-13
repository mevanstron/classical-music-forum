import React from 'react';
import { Link } from 'react-router-dom';
import { subCategories } from '../data';

const Category = props => {
  const filteredSubCategories = subCategories.filter(subCategory => subCategory.categoryId == props.match.params.categoryId);
  const subCategoryList = filteredSubCategories.map(subCategory => <div key={subCategory.id}><Link to={`${props.match.url}/${subCategory.id}`}>{subCategory.title}</Link></div>);

  return (
    <div>
      {subCategoryList}
    </div>
  );
}

export default Category;
