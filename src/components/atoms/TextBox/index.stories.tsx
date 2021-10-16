import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import TextBox from './';

export default {
  component: TextBox,
  title: 'components/atoms/TextBox',
  argTypes: {
    tagName: {
      options: ['div', 'p'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof TextBox>;

const Template: Story<Props> = (args) => <TextBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  tagName: 'div',
  children:
    'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん',
};
