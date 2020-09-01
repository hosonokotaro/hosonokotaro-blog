import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Top from './pages/Top';
import EditPost from './pages/EditPost';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/editpost" component={EditPost} />
      </Switch>
    </Router>
  );
};

export default hot(App);
