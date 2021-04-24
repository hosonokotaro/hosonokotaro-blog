import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Edit from './Edit';
import EditPost from './EditPost';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/edit/:id" component={EditPost} />
    </Switch>
  );
};

export default Router;
