import React from 'react';
import { Route, Switch } from 'react-router-dom';

import axiosInstance from '../adapter/axiosInstance';
import SinglePost from './SinglePost';
import Top from './Top';

const Pages: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/:id" component={SinglePost} />
    </Switch>
  );
};

export default Pages;
