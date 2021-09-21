import React, { ChangeEvent } from 'react';

import { StyledInputFile } from './styledIndex';

export interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.VFC<Partial<Props>> = ({ handleChange }) => {
  return <StyledInputFile onChange={handleChange} />;
};

export default InputFile;
