import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SinglePost from '~/container/SinglePost';
import Top from '~/container/Top';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/:id" component={SinglePost} />
    </Switch>
  );
};

export default Router;
