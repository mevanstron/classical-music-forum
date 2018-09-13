import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Forum from './containers/Forum';
import Category from './containers/Category';
import SubCategory from './components/SubCategory';
import Thread from './components/Thread';
import { connect } from 'react-redux'
import { buildCategories, buildSubCategories } from './actions/forum';



class App extends Component {
  componentDidMount() {
    this.props.buildCategories();
    this.props.buildSubCategories();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Classical Music Forum</h1>
        </header>
        <Router>
          <div>
            <Route exact path={'/'} component={Forum} />
            <Route exact path={'/:categoryId'} component={Category} />
            <Route exact path={'/:categoryId/:subCategoryId'} component={SubCategory} />
            <Route exact path={'/:categoryId/:subCategoryId/:threadId'} component={Thread} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { buildCategories, buildSubCategories })(App);
