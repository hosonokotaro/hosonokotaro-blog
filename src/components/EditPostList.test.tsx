import '@testing-library/jest-dom/extend-expect';

import React from 'react';
// NOTE: React Router をテストする場合は MemoryRouter を使用する
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '~/testUtil';

import EditPostList, { Props } from './EditPostList';

const posts = [
  {
    id: 'a1b2c3',
    title: 'test title',
    content: 'test content',
    release: true,
    createDate: '2021年1月10日 00:57',
  },
  {
    id: 'b2c3d4',
    title: 'test title2',
    content: 'test content2',
    release: true,
    createDate: '2021年1月11日 00:57',
  },
];

it('should render: EditPostList に投稿記事一覧の各リンクが存在するか', () => {
  render(
    <MemoryRouter>
      <EditPostList posts={posts} />
    </MemoryRouter>
  );

  expect(screen.getAllByRole('link')).toHaveLength(posts.length);
});
