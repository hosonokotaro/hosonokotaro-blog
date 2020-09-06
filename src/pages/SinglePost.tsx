import React from 'react';

import useGetPost from '../hooks/useGetPost';

const SinglePost: React.FC = () => {
  const post = useGetPost();

  return (
    <section>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default SinglePost;
