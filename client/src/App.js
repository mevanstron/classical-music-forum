import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Forum from './containers/Forum';
import Category from './containers/Category';
import SubCategory from './components/SubCategory';
import Thread from './components/Thread';


class App extends Component {
  //testing API connection
  componentDidMount() {

    fetch("/api/categories")
      .then(response => response.json())
      .then(json => {console.log(json)})
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

export default App;
