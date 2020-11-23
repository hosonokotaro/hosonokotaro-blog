import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TPost } from '../adapter';
import Edit from './Edit';
import EditPost from './Edit/EditPost';
import SinglePost from './SinglePost';
import Top from './Top';

const slug: TPost['id'] = 'id';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/edit" component={Edit} />
      <Route exact path={`/:${slug}`} component={SinglePost} />
      <Route exact path={`/edit/:${slug}`} component={EditPost} />
    </Switch>
  );
};

export default Pages;
