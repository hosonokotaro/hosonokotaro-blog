import styled from 'styled-components';

// FIXME: component 分割したい
export const StyledItem = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 40px;
`;

export const StyledFilePath = styled.input`
  display: block;
  width: 100%;
`;

// NOTE: ここでしか利用しない image tag なので style を個別で当てている
export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
