import React from 'react';

import { StyledSpinner, StyledSpinnerWrapper } from './styled/styledSpinner';

const Spinner: React.FC = () => {
  return (
    <StyledSpinnerWrapper role="alert" aria-busy="true">
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </StyledSpinner>
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
