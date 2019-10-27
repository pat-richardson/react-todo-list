import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BookSearch from './components/BookSearch';
import FormPractice from './components/FormPractice';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <BookSearch />
      // </div>
      <Router>
        <div>
          <Route exact path="/" component={BookSearch}></Route>
          <Route exact path="/hello" component={FormPractice}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
