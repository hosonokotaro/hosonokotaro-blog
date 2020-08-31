import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import Top from './pages/Top';
import EditPost from './pages/EditPost';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <header>
          <h1>Hello, App.</h1>
          <Link to="/">Top</Link>
          <Link to="/editpost">EditPost</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/editpost" component={EditPost} />
        </Switch>
      </Router>
    </>
  );
};

export default hot(App);
