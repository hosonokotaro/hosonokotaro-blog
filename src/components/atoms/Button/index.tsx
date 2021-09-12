import React from 'react';

import { StyledButton } from './styledIndex';

export interface Props {
  text: string;
  onClick: VoidFunction;
  disabled?: boolean;
  attention?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  disabled = false,
  attention = false,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} attention={attention}>
      {text}
    </StyledButton>
  );
};

export default Button;
