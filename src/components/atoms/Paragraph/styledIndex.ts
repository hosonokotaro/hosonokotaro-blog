import styled from 'styled-components';

// FIXME: atoms から margin を削除したい
export const StyledParagraph = styled.p<{ isMargin: boolean }>`
  ${({ isMargin }) => isMargin && `margin-top: 20px;`}

  line-height: 1.5;
`;
