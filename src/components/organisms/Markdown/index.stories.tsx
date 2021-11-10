import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import Markdown from './';

export default {
  component: Markdown,
  title: 'components/organisms/Markdown',
} as Meta;

type Props = ComponentProps<typeof Markdown>;

const Template: Story<Props> = (args) => (
  <MemoryRouter>
    <Markdown {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  content: '### Markdown をいれてください',
};
