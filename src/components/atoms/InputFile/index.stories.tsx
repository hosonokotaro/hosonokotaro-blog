import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import InputFile from './';

export default {
  component: InputFile,
  title: 'components/atoms/InputFile',
  argTypes: {
    handleChange: { action: 'file を選択する為に使う' },
  },
} as Meta;

type Props = ComponentProps<typeof InputFile>;

const Template: Story<Props> = (args) => <InputFile {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
