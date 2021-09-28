import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import UploadFileItem, { ImagePath } from './';

export default {
  component: UploadFileItem,
  title: 'components/molecules/UploadFileItem',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const item: ImagePath = {
    fullPath: text('fullPath', 'https://picsum.photos/800/600'),
    fileName: 'fileName',
  };

  return <UploadFileItem item={item} deleteImage={action('deleteImage')} />;
};
