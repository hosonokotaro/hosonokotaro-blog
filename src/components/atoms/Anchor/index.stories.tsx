import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import Anchor from './';

export default {
  component: Anchor,
  title: 'components/atoms/Anchor',
} as Meta;

type Props = ComponentProps<typeof Anchor>;

const Template: Story<Props> = (args) => (
  <MemoryRouter>
    <Anchor {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Anchor',
  linkPath: 'https://www.google.com',
};
