import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '@/atoms/Footer';
import Layout from '@/atoms/Layout';
import Header from '@/molecules/Header';
import SinglePost from '@/templates/SinglePost';
import Top from '@/templates/Top';
import getDate from '~/utility/getDate';

const App: React.FC = () => {
  return (
    <>
      {/* NOTE: 動的に更新される Helmet は、指定しないと何も変わらないため、初期値を入れます。 */}
      <Helmet>
        <title>Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Layout tagName="article">
              <Top />
            </Layout>
          </Route>
          <Route exact path="/:id">
            <Layout tagName="section">
              <SinglePost />
            </Layout>
          </Route>
        </Switch>
        <Footer year={getDate('year')} />
      </Router>
    </>
  );
};

export default App;
