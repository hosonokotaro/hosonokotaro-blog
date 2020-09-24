import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { TPost } from '../adapter';
import SinglePost from './SinglePost';

const slug: TPost['id'] = 'id';

test('SinglePostの表示を確認する', () => {
  render(
    <MemoryRouter initialEntries={['/YrtBam2iH0XUNB4ucQVU']}>
      <Route exact path={`/:${slug}`}>
        <SinglePost />
      </Route>
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: /ブログをリリースしました！/i }));
});
