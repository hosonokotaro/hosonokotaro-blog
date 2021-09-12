import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EditPost from '@/templates/EditPost';
import EditTop from '@/templates/EditTop';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/edit" component={EditTop} />
      <Route exact path="/edit/:id" component={EditPost} />
    </Switch>
  );
};

export default Router;
