import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Footer from '@/atoms/Footer';
import TextBox from '@/atoms/TextBox';
import Header from '@/molecules/Header';
import useSession from '~/customHooks/useSession';
import getDate from '~/utility/getDate';

import EditRouter from './Router';

const App: React.FC = () => {
  const { userId, login, logout } = useSession();

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
      <ContentBox textAlign="center">
        {userId && <Button text="ログアウトする" onClick={logout} />}
        {!userId && <Button text="ログインする" onClick={login} />}
        <ContentBox marginTopSize="20px" textAlign="center">
          <TextBox>uid: {userId}</TextBox>
        </ContentBox>
      </ContentBox>
    </>
  );
};

export default App;
