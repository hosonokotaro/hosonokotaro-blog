import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import CodeBlock from './';

export default {
  component: CodeBlock,
  title: 'components/atoms/CodeBlock',
} as Meta;

type Props = ComponentProps<typeof CodeBlock>;

const Templates: Story<Props> = (args) => <CodeBlock {...args} />;

export const Default = Templates.bind({});

Default.args = {
  value: '<Sample prop1="text">Hello Storybook</Sample>',
  language: 'tsx',
};
