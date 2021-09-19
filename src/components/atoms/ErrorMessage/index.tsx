import React from 'react';

import { StyledErrorMessage } from './styledIndex';

const ErrorMessage: React.FC = () => {
  return (
    <StyledErrorMessage>
      Something went wrong. Please try again.
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
