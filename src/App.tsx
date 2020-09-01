import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Top from './pages/Top';
import AddPost from './pages/AddPost';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <header>
          <h1>Hello, App.</h1>
          <Link to="/">Top</Link>
          <Link to="/addpost">AddPost</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/addpost" component={AddPost} />
        </Switch>
      </Router>
    </>
  );
};

export default hot(App);
