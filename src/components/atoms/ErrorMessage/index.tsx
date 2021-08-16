import React from 'react';

import { StyledErrorMessageWrapper } from './styledIndex';

const ErrorMessage: React.FC = () => {
  return (
    <StyledErrorMessageWrapper>
      Something went wrong. Please try again.
    </StyledErrorMessageWrapper>
  );
};

export default ErrorMessage;
