import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Layout from './';

export default {
  component: Layout,
  title: 'components/atoms/Layout',
  argTypes: {
    tagName: {
      options: ['div', 'article', 'section'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof Layout>;

const Template: Story<Props> = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagName: 'div',
  children: 'Content',
};
