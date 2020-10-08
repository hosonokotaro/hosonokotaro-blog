import React from 'react';

import UploadFile from './UploadFile';
import UploadFiles from './UploadFiles';

const Upload: React.FC<{ uploadPath: string }> = (props) => {
  return (
    <>
      <UploadFile uploadPath={props.uploadPath} />
      <UploadFiles uploadPath={props.uploadPath} />
    </>
  );
};

export default Upload;
