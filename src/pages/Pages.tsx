import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Edit from './edit/Edit';
import SinglePost from './SinglePost';
import Top from './Top';

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
