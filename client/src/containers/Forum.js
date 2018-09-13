import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Forum extends React.Component {
  render() {
    const categoriesList = this.props.categories.map(category => <div key={category.id}><Link to={`/${category.id}`}>{category.title}</Link></div>)
    return (
      <div>
        {categoriesList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
      categories: state.forum.categories
  })
}

export default connect(mapStateToProps)(Forum);
