import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import TextItem from './';

export default {
  component: TextItem,
  title: 'components/atoms/TextItem',
} as Meta;

type Props = ComponentProps<typeof TextItem>;

const Template: Story<Props> = (args) => <TextItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'list item',
};
