import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/atoms/Footer';
import Header from '@/organisms/Header';
import GlobalStyle from '~/pages/GlobalStyle';
import SiteRouter from '~/pages/Router';
import getDate from '~/utility/getDate';

const App: React.FC = () => {
  return (
    <>
      {/* NOTE: 動的に更新される Helmet は、指定しないと何も変わらないため、初期値を入れます。 */}
      <Helmet>
        <title>Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <GlobalStyle />
      <Router>
        <Header />
        <SiteRouter />
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;
