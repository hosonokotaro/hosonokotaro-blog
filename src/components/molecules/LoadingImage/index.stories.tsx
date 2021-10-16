import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import LoadingImage from './';

export default {
  component: LoadingImage,
  title: 'components/molecules/LoadingImage',
} as Meta;

type Props = ComponentProps<typeof LoadingImage>;

const Template: Story<Props> = (args) => <LoadingImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://picsum.photos/800/600',
  alt: 'image',
};
