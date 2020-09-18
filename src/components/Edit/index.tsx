import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import firebase from '../../adapter';
import Spinner from '../Spinner';
import EditPosts from './EditPosts';
import NewPost from './NewPost';

const Edit: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const logout = () => {
    firebase.auth().signOut();
  };

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
