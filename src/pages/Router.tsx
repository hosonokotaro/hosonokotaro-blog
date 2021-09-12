import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SinglePost from '@/templates/SinglePost';
import Top from '@/templates/Top';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/:id" component={SinglePost} />
    </Switch>
  );
};

export default Router;
