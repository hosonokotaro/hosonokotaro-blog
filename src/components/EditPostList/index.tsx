import React from 'react';

import {
  StyledPost,
  StyledPosts,
  StyledSection,
  StyledTimestamp,
} from './styledIndex';

export interface Post {
  id: string;
  release: boolean;
  createDate: string;
  routerLink: React.ReactNode;
}

interface Props {
  postList: Post[];
}

const EditPostList: React.FC<Props> = ({ postList }) => {
  return (
    <StyledSection>
      <h2>投稿された記事一覧</h2>
      <StyledPosts>
        {postList.map(({ id, release, createDate, routerLink }) => (
          <StyledPost key={id}>
            <div>
              {!release && <span>【非公開】</span>}
              {routerLink}
            </div>
            <StyledTimestamp>
              作成日時: {createDate}
              <br />
              id: {id}
            </StyledTimestamp>
          </StyledPost>
        ))}
      </StyledPosts>
    </StyledSection>
  );
};

export default EditPostList;
