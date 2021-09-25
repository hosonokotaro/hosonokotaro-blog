import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import UploadFileList, { Props } from './';

export default {
  component: UploadFileList,
  title: 'components/molecules/UploadFileList',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const list: Props['fileList'] = [
    {
      fullPath: 'https://picsum.photos/800/600',
      fileName: '800/600',
    },
    {
      fullPath: 'https://picsum.photos/600/400',
      fileName: '600/400',
    },
  ];

  return <UploadFileList isStorage={false} fileList={list} />;
};
