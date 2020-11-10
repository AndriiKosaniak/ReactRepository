import React from "react";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";


function App() {
  return (
    <div>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <br/>
        <NavLink to='/posts'>Posts</NavLink>
        <br/>
        <NavLink to='/comments'>Comments</NavLink>
      </div>
      <div>
        <Switch>
          <Route path='/users' component={Users}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/comments' component={Comments}/>

          <Route render={ () => <h1>Error 404</h1>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
