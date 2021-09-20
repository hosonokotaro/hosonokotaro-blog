import React, { ChangeEvent } from 'react';

import { StyledInputCheckBox } from './styledIndex';

interface Props {
  id: string;
  name: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputCheckBox: React.VFC<Partial<Props>> = ({
  id = '',
  name = '',
  checked = false,
  handleChange,
}) => {
  return (
    <StyledInputCheckBox
      id={id}
      name={name}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export default InputCheckBox;
