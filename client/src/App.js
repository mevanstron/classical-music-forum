import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Forum from './containers/Forum';
import Category from './containers/Category';
import SubCategory from './components/SubCategory';
import Thread from './components/Thread';
import { connect } from 'react-redux'
import { buildCategories, buildSubCategories, buildThreads, buildPosts } from './actions/forum';



class App extends Component {
  componentDidMount() {
    console.log("Loading APP")
    this.props.buildCategories();
    this.props.buildSubCategories();
    this.props.buildThreads();
    this.props.buildPosts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Classical Music Forum</h1>
        </header>
        <Router>
          <div className="container">
            <Route exact path={'/'} component={Forum} />
            <Route exact path={'/:categoryPath'} component={Category} />
            <Route exact path={'/:categoryPath/:subCategoryPath'} component={SubCategory} />
            <Route exact path={'/:categoryPath/:subCategoryPath/:threadId'} component={Thread} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { buildCategories, buildSubCategories, buildThreads, buildPosts })(App);
