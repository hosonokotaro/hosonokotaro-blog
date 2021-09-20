import React from 'react';
import { Link } from 'react-router-dom';

import ContentBox from '@/atoms/ContentBox';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';

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
      {postList &&
        postList.map(({ id, title, release, createDate }) => (
          <ContentBox key={id} marginTopSize="20px">
            <div>
              {!release && <span>【非公開】</span>}
              <Link to={`/edit/${id}`}>{title}</Link>
            </div>
            <ContentBox marginTopSize="20px">
              <div>作成日時: {createDate}</div>
              <div>id: {id}</div>
            </ContentBox>
          </ContentBox>
        ))}
      {!postList && <Spinner />}
    </section>
  );
};

export default EditPostList;
