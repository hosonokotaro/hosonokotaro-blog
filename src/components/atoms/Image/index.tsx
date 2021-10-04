import React, { ReactEventHandler } from 'react';

import { StyledImage } from './styledImage';

interface Props {
  src: string;
  alt?: string;
  handleLoad?: ReactEventHandler<HTMLImageElement>;
}

const Image: React.VFC<Props> = ({ src, alt = 'image', handleLoad }) => {
  return <StyledImage src={src} alt={alt} onLoad={handleLoad} />;
};

export default Image;
