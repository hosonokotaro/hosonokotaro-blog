import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SinglePost from '../SinglePost';
import Top from '../Top';
import Edit from './Edit';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/:id" component={SinglePost} />
    </Switch>
  );
};

export default Pages;
