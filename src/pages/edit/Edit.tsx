import React from 'react';
import { Helmet } from 'react-helmet';

// import EditPosts from '../../components/edit/EditPosts';
// import NewPost from '../../components/edit/NewPost';
import Spinner from '../../components/Spinner';
// import { StyledLogin, StyledUid } from './styledEdit';
import useAuth from './useAuth';

const Edit: React.FC = () => {
  const { login, logout, user } = useAuth();

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex,nofollow" />
        <title>Edit | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <article>
        {user ? (
          <>
            <p>is login</p>
            {/* <NewPost />
            <EditPosts /> */}
          </>
        ) : (
          <Spinner />
        )}
        <div>
          {user ? (
            <button onClick={logout}>ログアウトする</button>
          ) : (
            <button onClick={login}>ログインする</button>
          )}
          {user && <div>uid: {user.uid}</div>}
        </div>
        {/* <StyledLogin>
        </StyledLogin> */}
      </article>
    </>
  );
};

export default Edit;
