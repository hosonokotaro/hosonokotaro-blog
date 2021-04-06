import React from 'react';
import { Link } from 'react-router-dom';

import CreatePost from '@/CreatePost';
import type { Post as EditPost } from '@/EditPostList';
import EditPostList from '@/EditPostList';
import Login from '@/Login';
import Spinner from '@/Spinner';
import useGetPostList from '~/pages/useGetPostList';

import useCreatePost from './useCreatePost';
import useLogin from './useLogin';

const Edit: React.FC = () => {
  const { status, titleDateList } = useGetPostList('all');

  const {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useCreatePost();

  const { user, login, logout } = useLogin();

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
        {user && status === 'success' ? (
          <>
            <CreatePost
              title={title}
              handleSubmit={handleSubmit}
              onTitleChanged={onTitleChanged}
              canSaveNewPost={canSaveNewPost}
            />
            <EditPostList postList={titleDateListAddLink()} />
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
