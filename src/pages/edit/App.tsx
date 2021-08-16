import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import getDate from '~/utility/getDate';

import EditRouter from './Router';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edit | Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <Router>
        <Header linkPath="/edit" />
        <EditRouter />
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;
