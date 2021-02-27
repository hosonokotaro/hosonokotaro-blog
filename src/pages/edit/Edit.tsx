import React from 'react';

// import EditPosts from '../../components/edit/EditPosts';
import CreatePost from '../../components/CreatePost';
import Login from '../../components/Login';
import Spinner from '../../components/Spinner';
import useCreatePost from './useCreatePost';
import useEdit from './useEdit';

const Edit: React.FC = () => {
  const { user, login, logout } = useEdit();
  const {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useCreatePost();

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
      </article>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default Edit;
