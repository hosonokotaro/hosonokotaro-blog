import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from '@/atoms/Spinner';
import SubTitle from '@/atoms/Title';

import {
  StyledPost,
  StyledPosts,
  StyledSection,
  StyledTimestamp,
} from './styledIndex';

export interface Post {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

interface Props {
  postList?: Post[];
}

const EditPostList: React.FC<Props> = ({ postList }) => {
  return (
    <StyledSection>
      <SubTitle text="投稿された記事一覧" />
      <StyledPosts>
        {postList &&
          postList.map(({ id, title, release, createDate }) => (
            <StyledPost key={id}>
              <div>
                {!release && <span>【非公開】</span>}
                <Link to={`/edit/${id}`}>{title}</Link>
              </div>
              <StyledTimestamp>
                作成日時: {createDate}
                <br />
                id: {id}
              </StyledTimestamp>
            </StyledPost>
          ))}
        {!postList && <Spinner />}
      </StyledPosts>
    </StyledSection>
  );
};

export default EditPostList;
