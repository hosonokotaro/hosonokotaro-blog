import styled from 'styled-components';

// FIXME: atoms から margin を削除したい
export const StyledTextBox = styled.div<{ isMargin: boolean }>`
  ${({ isMargin }) => isMargin && `margin-top: 20px;`}

  line-height: 1.5;
`;
