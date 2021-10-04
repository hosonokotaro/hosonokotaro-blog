import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import type { ImagePath } from './';
import UploadImage from './';

export default {
  component: UploadImage,
  title: 'components/organisms/UploadImage',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const list: ImagePath[] = [
    {
      fullPath: 'https://picsum.photos/800/600',
      fileName: '800/600',
    },
    {
      fullPath: 'https://picsum.photos/1000/800',
      fileName: '1000/800',
    },
    {
      fullPath: 'https://picsum.photos/600/400',
      fileName: '600/400',
    },
  ];

  return (
    <UploadImage
      imagePathList={list}
      deleteImage={action('deleteImage')}
      image={image}
      callbackSetImage={setImage}
      handleUpload={action('handleUpload')}
    />
  );
};
