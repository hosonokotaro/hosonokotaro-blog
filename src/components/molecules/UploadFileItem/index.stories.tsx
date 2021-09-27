import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import useUploadFileItem from '~/customHooks/useUploadFileItem';

import UploadFileItem, { ImagePath } from './';

export default {
  component: UploadFileItem,
  title: 'components/molecules/UploadFileItem',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const { copyClipboard, inputRef } = useUploadFileItem();

  const item: ImagePath = {
    fullPath: text('fullPath', 'https://picsum.photos/800/600'),
    fileName: text('fileName', 'fileName.jpg'),
  };

  return (
    <UploadFileItem
      item={item}
      deleteImage={action(item.fileName)}
      copyClipboard={copyClipboard}
      inputRef={inputRef}
    />
  );
};
