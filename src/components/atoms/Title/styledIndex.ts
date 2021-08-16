import styled from 'styled-components';

export const StyledTitle = styled.h2<{ isMargin: boolean }>`
  font-size: 2rem;
  ${({ isMargin }) => isMargin && `margin-top: 40px;`}
`;
