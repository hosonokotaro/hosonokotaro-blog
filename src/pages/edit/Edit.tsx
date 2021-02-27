import React from 'react';

// import EditPosts from '../../components/edit/EditPosts';
import CreatePost from '../../components/CreatePost';
import Login from '../../components/Login';
import Spinner from '../../components/Spinner';
import useEdit from './useEdit';

const Edit: React.FC = () => {
  const { user, login, logout } = useEdit();

  return (
    <>
      <article>{user ? <CreatePost /> : <Spinner />}</article>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default Edit;
