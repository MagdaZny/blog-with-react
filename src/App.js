import React, { Component, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
import Posts from './Posts';
import FormPost from './FormPost';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="Main">
        <Router>
          <Link to="/posts">Get All Posts</Link>
          <Route path="/posts" component={Posts} />
        </Router>
        <FormPost />
        <Posts />
      </div>
    </Provider>
  );
}


export default App;