import styled from 'styled-components';

// TODO: component 分割する
export const StyledUploadFile = styled.div`
  margin-top: 20px;
`;

export const StyledInputInfo = styled.div`
  margin-top: 10px;
`;

// NOTE: ここでしか利用しない image tag なので style を個別で当てている
export const StyledInputImage = styled.img`
  max-width: 50%;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
`;
