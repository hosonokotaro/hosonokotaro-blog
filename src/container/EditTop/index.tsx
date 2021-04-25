import React from 'react';

import CreatePost from '@/CreatePost';
import EditPostList from '@/EditPostList';
import Login from '@/Login';
import Spinner from '@/Spinner';
import useCreatePost from '~/customHooks/useCreatePost';
import useGetPostList from '~/customHooks/useGetPostList';
import useLogin from '~/customHooks/useLogin';

const EditTop: React.FC = () => {
  const { status, titleDateList } = useGetPostList('all');

  const {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useCreatePost();

  const { user, login, logout } = useLogin();

  return (
    <>
      <article>
        {user && status === 'success' ? (
          <>
            <CreatePost
              title={title}
              handleSubmit={handleSubmit}
              onTitleChanged={onTitleChanged}
              canSaveNewPost={canSaveNewPost}
            />
            <EditPostList postList={titleDateList} />
          </>
        ) : (
          <Spinner />
        )}
      </article>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default EditTop;
