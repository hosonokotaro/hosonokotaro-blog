import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import UploadFileItem from './';

export default {
  component: UploadFileItem,
  title: 'components/molecules/UploadFileItem',
  argTypes: {
    deleteImage: { action: 'deleteImage' },
  },
} as Meta;

type Props = ComponentProps<typeof UploadFileItem>;

const Template: Story<Props> = (args) => <UploadFileItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: {
    fullPath: 'https://picsum.photos/800/600',
    fileName: '800/600',
  },
};
