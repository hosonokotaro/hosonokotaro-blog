import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import InputCheckBox from './';

export default {
  component: InputCheckBox,
  title: 'components/atoms/InputCheckBox',
  argTypes: {
    handleChange: { action: 'state を更新する為に使う' },
  },
} as Meta;

type Props = ComponentProps<typeof InputCheckBox>;

const Template: Story<Props> = (args) => <InputCheckBox {...args} />;

export const Default = Template.bind({});

// FIXME: checked をうまくテスト出来ないので、処理を見直したい
Default.args = {
  id: 'id',
  name: 'name',
  checked: false,
};
