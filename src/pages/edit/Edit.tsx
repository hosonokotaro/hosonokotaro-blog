import React from 'react';
import { Link } from 'react-router-dom';

import CreatePost from '@/CreatePost';
import EditPostList, { Post as EditPost } from '@/EditPostList';
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

  const titleDateListAddLink = () => {
    const titleDateListFix: EditPost[] = [];

    titleDateList.map(({ id, title, release, createDate }) => {
      titleDateListFix.push({
        id,
        release,
        createDate,
        routerLink: <Link to={`/edit/${id}`}>{title}</Link>,
      });
    });

    return titleDateListFix;
  };

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
          <EditPostList postList={titleDateListAddLink()} />
        ) : (
          <Spinner />
        )}
      </article>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default Edit;
