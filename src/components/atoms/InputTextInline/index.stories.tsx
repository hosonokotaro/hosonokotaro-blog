import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import InputTextInline from './';

export default {
  component: InputTextInline,
  title: 'components/atoms/InputTextInline',
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
} as Meta;

type Props = ComponentProps<typeof InputTextInline>;

const Template: Story<Props> = (args) => <InputTextInline {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'id',
  name: 'name',
  defaultValue: 'input text',
};
