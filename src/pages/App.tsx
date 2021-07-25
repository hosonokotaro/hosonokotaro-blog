import '~/pages/globalCss';

import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/Footer';
import Header from '@/Header';
import SiteRouter from '~/pages/Router';
import getDate from '~/utility/getDate';

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
        <Header />
        <SiteRouter />
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;
