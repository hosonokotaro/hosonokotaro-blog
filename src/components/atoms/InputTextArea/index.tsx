import React, { ChangeEvent } from 'react';

import { StyledInputTextArea } from './styledIndex';

interface Props {
  id: string;
  name: string;
  defaultValue: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextArea: React.VFC<Partial<Props>> = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
}) => {
  return (
    <StyledInputTextArea
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default InputTextArea;
