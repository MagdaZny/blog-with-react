import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import './App.css';
import Posts from './Posts';
import FormPost from './FormPost';

function App() {
  return (
    <div className="Main">
      <Router>
        <Link to="/posts">Get All Posts</Link>
        <Route path="/posts" component={Posts} />
      </Router>
      <FormPost />
    </div>
  );
}


export default App;