import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@/atoms/Layout';
import SinglePost from '@/templates/SinglePost';
import Top from '@/templates/Top';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Layout tagName="article">
          <Top />
        </Layout>
      </Route>
      <Route exact path="/:id">
        <Layout tagName="section">
          <SinglePost />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Router;
