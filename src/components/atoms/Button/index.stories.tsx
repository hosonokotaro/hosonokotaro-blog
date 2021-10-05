import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Button from './';

export default {
  component: Button,
  title: 'components/atoms/Button',
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as Meta;

type Props = ComponentProps<typeof Button>;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  text: 'button',
  attention: false,
};
