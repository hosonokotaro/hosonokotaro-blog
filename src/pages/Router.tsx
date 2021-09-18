import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@/atoms/Layout';
import SinglePost from '@/templates/SinglePost';
import Top from '@/templates/Top';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout tag="article">
          <Top />
        </Layout>
      </Route>
      <Route exact path="/:id">
        <Layout tag="section">
          <SinglePost />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Router;
