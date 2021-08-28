import React, { useState } from 'react';

import Spinner from '@/atoms/Spinner';

import { StyledImage } from './styledImage';

interface Props {
  src: string;
  alt?: string;
}

const Image: React.VFC<Props> = ({ src, alt = 'image' }) => {
  const [loading, isLoading] = useState(true);

  return (
    <>
      {loading && <Spinner />}
      <StyledImage src={src} alt={alt} onLoad={() => isLoading(false)} />
    </>
  );
};

export default Image;
