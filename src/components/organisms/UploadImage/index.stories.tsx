import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import UploadImage from './';

export default {
  component: UploadImage,
  title: 'components/organisms/UploadImage',
  argTypes: {
    deleteImage: { action: 'deleteImage' },
    handleUpload: { action: 'setImage' },
  },
} as Meta;

type Props = ComponentProps<typeof UploadImage>;

const Template: Story<Props> = (args) => {
  const [image, setImage] = useState<File | null>(null);

  return <UploadImage {...args} image={image} callbackSetImage={setImage} />;
};

export const Default = Template.bind({});

Default.args = {
  imagePathList: [
    {
      fullPath: 'https://picsum.photos/800/600',
      fileName: '800/600',
    },
    {
      fullPath: 'https://picsum.photos/1000/800',
      fileName: '1000/800',
    },
    {
      fullPath: 'https://picsum.photos/600/400',
      fileName: '600/400',
    },
  ],
};
