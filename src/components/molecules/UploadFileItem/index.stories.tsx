import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import UploadFileItem, { Props } from './';

export default {
  component: UploadFileItem,
  title: 'components/molecules/UploadFileItem',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const item: Props['item'] = {
    fullpath: text('fullpath', 'https://picsum.photos/800/600'),
    filename: text('filename', 'filename'),
  };

  return <UploadFileItem item={item} deleteImage={action('deleteImage')} />;
};
