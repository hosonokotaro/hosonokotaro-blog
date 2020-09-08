import React from 'react';

import EditPosts from '../components/EditPosts';
import NewPost from '../components/NewPost';

const Edit: React.FC = () => {
  return (
    <article>
      <NewPost />
      <EditPosts />
    </article>
  );
};

export default Edit;
