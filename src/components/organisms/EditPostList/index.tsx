import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';

// FIXME: Organisms から Style を削除したい
import { StyledPost, StyledPosts, StyledTimestamp } from './styledIndex';

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
    <section>
      <Title text="投稿された記事一覧" />
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
    </section>
  );
};

export default EditPostList;
