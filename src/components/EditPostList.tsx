import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledPost,
  StyledPosts,
  StyledSection,
  StyledTimestamp,
} from './styledEditPostList';

interface Post {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

export interface Props {
  posts: Post[];
}

const EditPostList: React.FC<Props> = ({ posts }) => {
  return (
    <StyledSection>
      <h2>投稿された記事一覧</h2>
      <StyledPosts>
        {posts.map((post) => (
          <StyledPost key={post.id}>
            <div>
              {!post.release && <span>【非公開】</span>}
              <Link to={`/edit/${post.id}`}>{post.title}</Link>
            </div>
            <StyledTimestamp>
              作成日時: {post.createDate}
              <br />
              id: {post.id}
            </StyledTimestamp>
          </StyledPost>
        ))}
      </StyledPosts>
    </StyledSection>
  );
};

export default EditPostList;
