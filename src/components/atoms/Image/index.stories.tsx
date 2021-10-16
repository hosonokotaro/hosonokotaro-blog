import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Image from './';

export default {
  component: Image,
  title: 'components/atoms/Image',
  argTypes: {
    handleLoad: { action: 'loaded' },
  },
} as Meta;

type Props = ComponentProps<typeof Image>;

const Template: Story<Props> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://picsum.photos/800/600',
  alt: 'image',
};
