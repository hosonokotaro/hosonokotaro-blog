import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import ErrorMessage from './';

export default {
  component: ErrorMessage,
  title: 'components/atoms/ErrorMessage',
} as Meta;

type Props = ComponentProps<typeof ErrorMessage>;

const Template: Story<Props> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Something went wrong. Please try again.',
};
