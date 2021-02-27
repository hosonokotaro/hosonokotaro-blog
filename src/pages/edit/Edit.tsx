import React from 'react';

// import EditPosts from '../../components/edit/EditPosts';
import CreatePost from '../../components/CreatePost';
import Spinner from '../../components/Spinner';
// import { StyledLogin, StyledUid } from './styledEdit';
import useAuth from './useAuth';

const Edit: React.FC = () => {
  const { login, logout, user } = useAuth();

  return (
    <>
      <article>
        {user ? (
          <>
            <CreatePost />
            {/* 
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
