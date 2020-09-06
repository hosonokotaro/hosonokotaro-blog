import './App.css';

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TPost } from './adapter';
import Header from './components/Header';
import EditPost from './pages/EditPost';
import SinglePost from './pages/SinglePost';
import Top from './pages/Top';

const slug: TPost['id'] = 'id';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/editpost" component={EditPost} />
        <Route exact path={`/:${slug}`} component={SinglePost} />
      </Switch>
    </Router>
  );
};

export default hot(App);
