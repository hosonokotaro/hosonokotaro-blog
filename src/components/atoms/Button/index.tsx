import React from 'react';

import { StyledButton } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  text: string;
  handleClick: VoidFunction;
  disabled?: boolean;
  attention?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  handleClick,
  disabled = false,
  attention = false,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      disabled={disabled}
      attention={attention}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
