import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { formatTimestampToDate } from '../../adapter';
import useGetEditPosts from '../Hooks/useGetEditPosts';

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

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const StyledPosts = styled.div`
  padding-top: 20px;
`;

const StyledPost = styled.div`
  & + div {
    padding-top: 20px;
  }
`;

const StyledTimestamp = styled.div`
  padding-top: 20px;

  & + label {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid #333;
  }
`;
