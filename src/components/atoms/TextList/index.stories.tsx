import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import TextItem from '@/atoms/TextItem';

import TextList from './';

export default {
  component: TextList,
  title: 'components/atoms/TextList',
} as Meta;

type Props = ComponentProps<typeof TextList>;

const Template: Story<Props> = (args) => <TextList {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <TextItem text="hello" />
      <TextItem text="goodbye" />
      <TextItem text="thanks" />
    </>
  ),
};
