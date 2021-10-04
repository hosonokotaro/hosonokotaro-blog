import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React, { useState } from 'react';

import UploadSelectFile from './';

export default {
  component: UploadSelectFile,
  title: 'components/molecules/UploadSelectFile',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <UploadSelectFile
      image={image}
      callbackSetImage={setImage}
      handleUpload={action(image ? image.name : '')}
    />
  );
};
