import React from 'react';

import { StyledErrorMessageWrapper } from './styledIndex';

const ErrorMessage: React.FC = () => {
  return (
    <StyledErrorMessageWrapper>
      Something went wrong. Prease try again.
    </StyledErrorMessageWrapper>
  );
};

export default ErrorMessage;
