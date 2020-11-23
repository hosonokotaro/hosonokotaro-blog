import React from 'react';
import { Link } from 'react-router-dom';

import formatTimestampToDate from '../../utility/formatTimestampToDate';
import {
  StyledPost,
  StyledPosts,
  StyledSection,
  StyledTimestamp,
} from './styledEditPosts';
import useGetEditPosts from './useGetEditPosts';

const EditPosts: React.FC = () => {
  const posts = useGetEditPosts();

  return (
    <StyledSection>
      <h2>投稿された記事一覧</h2>
      <StyledPosts>
        {posts.map((post) => (
          <StyledPost key={post.id}>
            <div>
              {post.release ? null : <span>【非公開】</span>}
              <Link to={`/edit/${post.id}`}>{post.title}</Link>
            </div>
            <StyledTimestamp>
              作成日時: {formatTimestampToDate(post.createDate)}
              <br />
              id: {post.id}
            </StyledTimestamp>
          </StyledPost>
        ))}
      </StyledPosts>
    </StyledSection>
  );
};

export default EditPosts;
