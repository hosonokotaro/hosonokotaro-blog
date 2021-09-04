import styled from 'styled-components';

export const StyledSpinnerWrapper = styled.div`
  text-align: center;
`;

// FIXME: atoms から margin を削除したい
export const StyledSpinner = styled.svg`
  width: 50px;
  height: 50px;
  margin: 40px;
  animation: rotate 1s linear infinite;

  & .path {
    stroke: #0096ff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
