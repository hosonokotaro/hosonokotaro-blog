import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@/atoms/Layout';
import EditPost from '@/templates/EditPost';
import EditTop from '@/templates/EditTop';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/edit">
        <Layout tagName="article">
          <EditTop />
        </Layout>
      </Route>
      <Route exact path="/edit/:id">
        <Layout tagName="article">
          <EditPost />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Router;
