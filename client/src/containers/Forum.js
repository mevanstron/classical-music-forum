import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

class Forum extends React.Component {
  render() {
    const categoriesList = categories.map(category => <div key={category.id}><Link to={`/${category.id}`}>{category.title}</Link></div>)
    return (
      <div>
        {categoriesList}
      </div>
    );
  }
}

export default Forum;
