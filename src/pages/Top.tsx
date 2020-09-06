import React from 'react';
import { Link } from 'react-router-dom';

import { TPostTitle } from '../adapter';
import useGetPosts from '../hooks/useGetPosts';

const Top: React.FC = () => {
  const posts = useGetPosts();

  const showPost = (post: TPostTitle) => {
    if (!post.release) {
      return false;
    }

    return (
      <div key={post.id}>
        <Link to={post.id}>{post.title}</Link>
      </div>
    );
  };

  return (
    <article>
      <h2>記事一覧</h2>
      {posts?.map((post) => showPost(post))}
    </article>
  );
};

export default Top;
