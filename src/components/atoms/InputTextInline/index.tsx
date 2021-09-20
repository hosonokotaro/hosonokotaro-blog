import React, { ChangeEvent } from 'react';

import { StyledInputTextInline } from './styledIndex';

export interface Props {
  id: string;
  name: string;
  defaultValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputTextInline: React.VFC<Partial<Props>> = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
}) => {
  return (
    <StyledInputTextInline
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default InputTextInline;
