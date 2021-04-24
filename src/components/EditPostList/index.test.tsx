import '@testing-library/jest-dom/extend-expect';

import React from 'react';
// NOTE: React Router をテストする場合は MemoryRouter を使用する
import { Link, MemoryRouter } from 'react-router-dom';

import { render, screen } from '~/testUtil';

import type { Post } from '.';
import EditPostList from '.';

const postList: Post[] = [
  {
    id: 'a1b2c3',
    release: true,
    createDate: '2021年1月10日 00:57',
    routerLink: <Link to="/edit/a1b2c3">test title</Link>,
  },
  {
    id: 'b2c3d4',
    release: true,
    createDate: '2021年1月11日 00:57',
    routerLink: <Link to="/edit/b2c3d4">test title2</Link>,
  },
];

it('should render: EditPostList に投稿記事一覧の各リンクが存在するか', () => {
  render(
    <MemoryRouter>
      <EditPostList postList={postList} />
    </MemoryRouter>
  );

  expect(screen.getAllByRole('link')).toHaveLength(postList.length);
});
