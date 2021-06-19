import { styled } from '@linaria/react';

export const StyledItem = styled.div`
  width: calc(50% - 10px);
  margin-bottom: 40px;
`;

export const StyledFilePath = styled.input`
  display: block;
  width: 100%;
`;

export const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledDeleteButton = styled.button`
  color: #f66;
  button + & {
    margin-left: 20px;
  }
`;

export const StyledImgWrap = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #eee;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
