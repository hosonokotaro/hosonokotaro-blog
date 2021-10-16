import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import UploadFileList from './';

export default {
  component: UploadFileList,
  title: 'components/molecules/UploadFileList',
  argTypes: {
    deleteImage: { action: 'deleteImage' },
  },
} as Meta;

type Props = ComponentProps<typeof UploadFileList>;

const Template: Story<Props> = (args) => <UploadFileList {...args} />;

export const Default = Template.bind({});

Default.args = {
  imagePathList: [
    {
      fullPath: 'https://picsum.photos/800/600',
      fileName: '800/600',
    },
    {
      fullPath: 'https://picsum.photos/600/400',
      fileName: '600/400',
    },
    {
      fullPath: 'https://picsum.photos/300/400',
      fileName: '300/400',
    },
  ],
};
