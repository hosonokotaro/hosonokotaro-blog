import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import TextLabel from './';

export default {
  component: TextLabel,
  title: 'components/atoms/TextLabel',
  argTypes: {
    tagName: {
      options: ['label', 'span'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof TextLabel>;

const Template: Story<Props> = (args) => <TextLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'label',
  htmlFor: '',
  tagName: 'label',
};
