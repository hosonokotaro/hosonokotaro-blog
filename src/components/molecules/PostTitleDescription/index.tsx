import React from 'react';
import { Link } from 'react-router-dom';

import Title from '@/atoms/Title';

import { Description } from './styledIndex';

interface Props {
  id: string;
  title: string;
  description: string;
  isRelease: boolean;
}

const PostTitleDescription: React.VFC<Props> = ({
  id,
  title,
  description,
  isRelease,
}) => {
  return (
    <div>
      <div>
        {!isRelease && <span>【非公開】</span>}
        <Link to={`/edit/${id}`}>
          <Title rank="span" text={title} />
        </Link>
      </div>
      <Description>{description}</Description>
    </div>
  );
};

export default PostTitleDescription;
