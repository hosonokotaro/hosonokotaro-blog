import React, { ChangeEvent, RefObject } from 'react';

import { StyledInputTextInline } from './styledIndex';

interface Props {
  id: string;
  name: string;
  defaultValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  refObject: RefObject<HTMLInputElement>;
}

// FIXME: handle change を input する度に実行するロジックを見直したい
const InputTextInline: React.VFC<Partial<Props>> = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
  refObject,
}) => {
  return (
    <StyledInputTextInline
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      ref={refObject}
    />
  );
};

export default InputTextInline;
