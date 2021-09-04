import styled from 'styled-components';

// FIXME: atoms から margin を削除したい
// FIXME: 分岐条件を整理したい
export const StyledTitle = styled.h2<{
  isMargin: boolean;
  rankStyle: 'h2' | 'h3' | 'h4';
}>`
  ${({ isMargin }) => isMargin && `margin-top: 40px;`}
  ${({ rankStyle }) => {
    switch (rankStyle) {
      case 'h3':
        return 'font-size: 1.6rem';
      case 'h4':
        return 'font-size: 1.2rem';
      default:
        return 'font-size: 2rem';
    }
  }}
`;
