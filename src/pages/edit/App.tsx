import '~/pages/globalCss';

import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/Footer';
import Header from '@/Header';
import getDate from '~/utility/getDate';
import ScrollToTop from '~/utility/ScrollToTop';

import EditPages from './EditPages';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap);
        </style>
      </Helmet>
      <Router>
        <ScrollToTop />
        <Header />
        <EditPages />
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default hot(App);
