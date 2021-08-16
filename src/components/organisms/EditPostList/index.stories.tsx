import { Meta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import EditPostList from './';

export default {
  component: EditPostList,
  title: 'components/organisms/EditPostList',
} as Meta;

const mockPostList = [
  {
    id: 'sdkkCvuFVYCgG0Ge7CAQ',
    title: 'ReactからCloud Storageを利用する',
    release: true,
    createDate: '2020年10月9日 17:27',
  },
  {
    id: '41RgvZX9IbGF1STpvGUU',
    title: 'Reactでシンタックスハイライトを導入する',
    release: true,
    createDate: '2020年9月26日 16:55',
  },
  {
    id: 'YrtBam2iH0XUNB4ucQVU',
    title: 'ブログをリリースしました',
    release: true,
    createDate: '2020年9月12日 20:32',
  },
];

export const Default: React.FC = () => {
  return (
    <MemoryRouter>
      <EditPostList postList={mockPostList} />
    </MemoryRouter>
  );
};
