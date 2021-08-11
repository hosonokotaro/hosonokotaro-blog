import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import GlobalStyle from '~/pages/GlobalStyle';
import getDate from '~/utility/getDate';

import EditRouter from './Router';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap);
        </style>
      </Helmet>
      <GlobalStyle />
      <Router>
        <Header linkPath="/edit" />
        <EditRouter />
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;
