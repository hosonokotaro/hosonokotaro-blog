import React, { useState } from 'react';

import Image from '@/atoms/Image';
import Spinner from '@/atoms/Spinner';

interface Props {
  src: string;
  alt?: string;
}

const LoadingImage: React.VFC<Props> = ({ src, alt = 'image' }) => {
  const [loading, isLoading] = useState(true);

  return (
    <>
      {loading && <Spinner />}
      <Image src={src} alt={alt} handleLoad={() => isLoading(false)} />
    </>
  );
};

export default LoadingImage;
