import React from 'react';

import { StyledButton } from './styledIndex';

export interface Props {
  text: string;
  onClick: VoidFunction;
  disabled?: boolean;
  isMargin?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  disabled = false,
  isMargin = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      style={!isMargin ? { marginTop: 0 } : {}}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
