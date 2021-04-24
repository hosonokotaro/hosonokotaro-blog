import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { render, screen } from '~/testUtil';

import CreatePost from '.';

const handleSubmit = jest.fn();
const onTitleChanged = jest.fn();

it('it should render: CreatePost の input area に入れた文字が表示される', () => {
  const title = 'test title';
  const canSaveNewPost = true;

  render(
    <CreatePost
      title={title}
      handleSubmit={handleSubmit}
      onTitleChanged={onTitleChanged}
      canSaveNewPost={canSaveNewPost}
    />
  );

  expect(screen.getByRole('textbox').getAttribute('value')).toEqual(title);
});

it('it should render: CreatePost の input area に入れた文字が表示されない', () => {
  const title = '';
  const canSaveNewPost = false;

  render(
    <CreatePost
      title={title}
      handleSubmit={handleSubmit}
      onTitleChanged={onTitleChanged}
      canSaveNewPost={canSaveNewPost}
    />
  );

  expect(screen.getByRole('textbox').getAttribute('value')).toEqual(title);
});
