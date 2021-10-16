import { Meta, Story } from '@storybook/react';
import React, { ComponentProps, useState } from 'react';

import UploadSelectFile from './';

export default {
  component: UploadSelectFile,
  title: 'components/molecules/UploadSelectFile',
  argTypes: {
    handleUpload: { action: 'setImage' },
  },
} as Meta;

type Props = ComponentProps<typeof UploadSelectFile>;

const Template: Story<Props> = (args) => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <UploadSelectFile {...args} image={image} callbackSetImage={setImage} />
  );
};

export const Default = Template.bind({});

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
