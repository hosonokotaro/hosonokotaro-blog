import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';

import CreatePost from './';

export default {
  component: CreatePost,
  title: 'components/organisms/CreatePost',
} as Meta;

export const Default: React.FC = () => {
  const [createTitle, setCreateTitle] = useState('Test Title');

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(e.target.value);
  };

  return (
    <CreatePost
      title={createTitle}
      handleSubmit={action(createTitle)}
      onTitleChanged={onTitleChanged}
      canSaveNewPost={!!createTitle}
    />
  );
};
