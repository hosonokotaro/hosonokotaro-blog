import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import PostTitleDescription from './';

export default {
  component: PostTitleDescription,
  title: 'components/molecules/PostTitleDescription',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <MemoryRouter>
    <PostTitleDescription
      id={text('id', 'testId')}
      title={text('title', 'test title')}
      description={text('description', '2021年10月11日')}
      isRelease={boolean('isRelease', true)}
    />
  </MemoryRouter>
);
