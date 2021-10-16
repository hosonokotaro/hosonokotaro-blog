import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import ContentBox from '@/atoms/ContentBox';

export default {
  component: ContentBox,
  title: 'components/atoms/ContentBox',
  argTypes: {
    marginTopSize: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'select' },
    },
    textAlign: {
      options: ['left', 'center', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof ContentBox>;

const Template: Story<Props> = (args) => <ContentBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  isBetween: false,
  marginTopSize: '0px',
  textAlign: 'left',
  isBoxCenter: false,
  isCard: false,
  children: '何らかの内容が入ります',
};
