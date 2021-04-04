import '~/pages/globalCss';

import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/Footer';
import Header from '@/Header';
import Pages from '~/pages/Pages';
import ScrollToTop from '~/utility/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap);
        </style>
      </Helmet>
      <Router>
        <ScrollToTop />
        <Header />
        <Pages />
        <Footer />
      </Router>
    </>
  );
};

export default hot(App);
