import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EditPost from '~/container/EditPost';
import EditTop from '~/container/EditTop';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/edit" component={EditTop} />
      <Route exact path="/edit/:id" component={EditPost} />
    </Switch>
  );
};

export default Router;
