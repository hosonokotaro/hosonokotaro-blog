import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React, { ChangeEvent, ComponentProps, useState } from 'react';

import CreatePost from './';

export default {
  component: CreatePost,
  title: 'components/organisms/CreatePost',
  argTypes: {
    handleSubmit: { action: 'createTitle' },
  },
} as Meta;

type Props = ComponentProps<typeof CreatePost>;

const Template: Story<Props> = () => {
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

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
