import React from 'react';
import { Link } from 'react-router-dom';

import useGetPosts from '../hooks/useGetPosts';
import { TPost } from '../adapter';

const Top: React.FC = () => {
  const posts = useGetPosts();

  const showPost = (post: TPost) => {
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
      {posts.map((post) => showPost(post))}
    </article>
  );
};

export default Top;
