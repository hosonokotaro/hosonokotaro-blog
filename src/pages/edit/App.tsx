import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Footer from '@/atoms/Footer';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import TextBox from '@/atoms/TextBox';
import CreatePost from '@/organisms/CreatePost';
import EditPostList from '@/organisms/EditPostList';
import Header from '@/organisms/Header';
import useEditTop from '~/customHooks/useEditTop';
import useSession from '~/customHooks/useSession';
import getDate from '~/utility/getDate';

import EditPost from './EditPost';

const App: React.FC = () => {
  const { userId, login, logout } = useSession();
  const {
    postListResponse,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useEditTop();

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
              {postListResponse && (
                <>
                  <ContentBox marginTopSize="40px">
                    <CreatePost
                      title={createTitle}
                      handleSubmit={handleSubmit}
                      onTitleChanged={onTitleChanged}
                      canSaveNewPost={canSaveNewPost}
                    />
                  </ContentBox>
                  <ContentBox marginTopSize="40px">
                    <EditPostList postList={postListResponse.titleDateList} />
                  </ContentBox>
                </>
              )}
              {!postListResponse && <Spinner />}
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
