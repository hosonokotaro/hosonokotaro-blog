import React from 'react';
import { Helmet } from 'react-helmet';

import useAuth from '../hooks/useAuth';
import Spinner from '../Spinner';
import EditPosts from './EditPosts';
import NewPost from './NewPost';
import { StyledLogin, StyledUid } from './styled/styledIndex';

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
