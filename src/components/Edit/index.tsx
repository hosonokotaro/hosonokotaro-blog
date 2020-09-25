import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import Spinner from '../Spinner';
import EditPosts from './EditPosts';
import NewPost from './NewPost';

const Edit: React.FC = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <title>Edit | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <article>
        {user ? (
          <>
            <NewPost />
            <EditPosts />
          </>
        ) : (
          <Spinner />
        )}
        <StyledLogin>
          {user ? (
            <button onClick={logout}>ログアウトする</button>
          ) : (
            <button onClick={login}>ログインする</button>
          )}
          {user ? <StyledUid>uid: {user.uid}</StyledUid> : null}
        </StyledLogin>
      </article>
    </>
  );
};

export default Edit;

const StyledLogin = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

const StyledUid = styled.div`
  margin-top: 20px;
`;
