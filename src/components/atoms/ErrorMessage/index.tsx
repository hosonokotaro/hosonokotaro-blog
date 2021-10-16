import React from 'react';

import { StyledErrorMessage } from './styledIndex';

interface Props {
  text: string;
}

const ErrorMessage: React.FC<Partial<Props>> = ({
  text = 'Something went wrong. Please try again.',
}) => {
  return <StyledErrorMessage>{text}</StyledErrorMessage>;
};

export default ErrorMessage;
