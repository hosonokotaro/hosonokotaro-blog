import React, { useState } from 'react';

import Image from '@/atoms/Image';
import Spinner from '@/atoms/Spinner';

interface Props {
  src: string;
  alt?: string;
}

const LoadingImage: React.VFC<Props> = ({ src, alt = 'image' }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Spinner />}
      <Image src={src} alt={alt} handleLoad={() => setIsLoading(false)} />
    </>
  );
};

export default LoadingImage;
