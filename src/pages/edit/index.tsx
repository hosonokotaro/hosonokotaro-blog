import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const isDevelopment = process.env.NODE_ENV === 'development';
const renderMethod =
  isDevelopment && module.hot ? ReactDOM.render : ReactDOM.hydrate;

const render = () => {
  renderMethod(<App />, document.getElementById('root'));
};

if (isDevelopment && module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}

render();
