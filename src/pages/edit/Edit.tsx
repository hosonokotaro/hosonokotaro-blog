import React from 'react';

import CreatePost from '@/CreatePost';
import EditPostList from '@/EditPostList';
import Login from '@/Login';
import Spinner from '@/Spinner';
import useGetPosts from '~/pages/useGetPosts';

import useCreatePost from './useCreatePost';
import useLogin from './useLogin';

const Edit: React.FC = () => {
  const { user, login, logout } = useLogin();
  const {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useCreatePost();

  const { status, titleDateList } = useGetPosts();

  return (
    <>
      <article>
        {user ? (
          <CreatePost
            title={title}
            handleSubmit={handleSubmit}
            onTitleChanged={onTitleChanged}
            canSaveNewPost={canSaveNewPost}
          />
        ) : (
          <Spinner />
        )}
        {status === 'success' ? (
          <>
            <EditPostList posts={titleDateList} />
          </>
        ) : (
          <Spinner />
        )}
      </article>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default Edit;
