import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './';

export default {
  component: Header,
  title: 'components/organisms/Header',
} as Meta;

type Props = ComponentProps<typeof Header>;

const Template: Story<Props> = (args) => {
  return (
    <MemoryRouter>
      <Header {...args} />
    </MemoryRouter>
  );
};

export const Default = Template.bind({});

Default.args = {
  linkPath: '/',
};
