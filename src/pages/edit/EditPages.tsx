import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SinglePost from '~/pages/SinglePost';
import Top from '~/pages/Top';

import Edit from './Edit';
import EditPost from './EditPost';

const EditPages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path="/:id" component={SinglePost} />
      <Route exact path="/edit/:id" component={EditPost} />
    </Switch>
  );
};

export default EditPages;
