import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import ContentArea from './';

export default {
  component: ContentArea,
  title: 'components/atoms/ContentArea',
  argTypes: {
    tagName: {
      options: ['div', 'article', 'section'],
      control: { type: 'radio' },
    },
    marginTopSize: {
      options: ['0px', '20px', '40px', '80px'],
      control: { type: 'select' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof ContentArea>;

const Template: Story<Props> = (args) => <ContentArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagName: 'div',
  marginTopSize: '0px',
  children: 'free text',
};
