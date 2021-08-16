import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';

import useEditTop from '~/customHooks/useEditTop';

import CreatePost from './';

export default {
  component: CreatePost,
  title: 'components/organisms/CreatePost',
} as Meta;

export const Default: React.FC = () => {
  const { createTitle, onTitleChanged, canSaveNewPost } = useEditTop();

  return (
    <CreatePost
      title={createTitle}
      handleSubmit={action(createTitle)}
      onTitleChanged={onTitleChanged}
      canSaveNewPost={canSaveNewPost}
    />
  );
};
