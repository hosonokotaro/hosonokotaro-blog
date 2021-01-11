import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CollectionPost } from '../adapter';
import Edit from './edit/Edit';
import EditPost from './edit/EditPost';
import SinglePost from './SinglePost';
import Top from './Top';

const slug: CollectionPost['id'] = 'id';

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
