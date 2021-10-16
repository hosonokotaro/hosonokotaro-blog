import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import InputTextArea from './';

export default {
  component: InputTextArea,
  title: 'components/atoms/InputTextArea',
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
} as Meta;

type Props = ComponentProps<typeof InputTextArea>;

const Template: Story<Props> = (args) => <InputTextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'id',
  name: 'name',
  defaultValue: 'input text',
};
