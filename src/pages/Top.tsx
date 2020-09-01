import React from 'react';

import useGetPosts from '../hooks/useGetPosts';

const Top: React.FC = () => {
  const posts = useGetPosts();

  return (
    <article>
      <h2>Top</h2>
      {posts.map((post) => (
        <section key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </section>
      ))}
    </article>
  );
};

export default Top;
