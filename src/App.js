import React from 'react';
import './App.css';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App ml-100">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Posts></Posts>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/post-details/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
