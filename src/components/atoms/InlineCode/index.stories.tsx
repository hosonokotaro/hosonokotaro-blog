import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import InlineCode from './';

export default {
  component: InlineCode,
  title: 'components/atoms/InlineCode',
} as Meta;

type Props = ComponentProps<typeof InlineCode>;

const Template: Story<Props> = (args) => <InlineCode {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'inline code',
};
