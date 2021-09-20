import React, { ChangeEvent } from 'react';

import { StyledInputText } from './styledIndex';

export interface Props {
  id?: string;
  name?: string;
  defaultValue?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.VFC<Props> = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
}) => {
  return (
    <StyledInputText
      type="text"
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default InputText;
