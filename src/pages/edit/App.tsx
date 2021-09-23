import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Footer from '@/atoms/Footer';
import Layout from '@/atoms/Layout';
import TextBox from '@/atoms/TextBox';
import Header from '@/organisms/Header';
import EditPost from '@/templates/EditPost';
import EditTop from '@/templates/EditTop';
import useSession from '~/customHooks/useSession';
import getDate from '~/utility/getDate';

const App: React.FC = () => {
  const { userId, login, logout } = useSession();

  return (
    <>
      <Helmet>
        <title>Edit | Tech Blog | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <Router>
        <Header linkPath="/edit" />
        <Switch>
          <Route exact path="/edit">
            <Layout tagName="article">
              <EditTop />
            </Layout>
          </Route>
          <Route exact path="/edit/:id">
            <Layout tagName="article">
              <EditPost />
            </Layout>
          </Route>
        </Switch>
        <Footer year={getDate('year')} />
      </Router>
      <ContentBox textAlign="center">
        {userId && <Button text="ログアウトする" handleClick={logout} />}
        {!userId && <Button text="ログインする" handleClick={login} />}
        <ContentBox marginTopSize="20px" textAlign="center">
          <TextBox>uid: {userId}</TextBox>
        </ContentBox>
      </ContentBox>
    </>
  );
};

export default App;
