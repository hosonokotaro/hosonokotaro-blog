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
  const [uploadFileName, setUploadFileName] = useState('');

  // NOTE: uploadPath: post id, setUploadFileName: useState setter
  const selectFile = {
    uploadPath: '',
    callbackSetUploadFileName: setUploadFileName,
  };

  return (
    <UploadSelectFile
      selectFile={selectFile}
      isStorage={false}
      handleUpload={action(uploadFileName)}
    />
  );
};
