import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-bottom: 40px;
`;

export const StyledWrapper = styled.div`
  padding-top: 20px;
`;

// FIXME: 別の component に分割したい
export const StyledLabel = styled.label`
  display: block;
  input + & {
    margin-top: 20px;
  }
  textarea + & {
    margin-top: 20px;
  }
`;

export const StyledLabelInlineBlock = styled.label`
  display: inline-block;
  textarea + & {
    margin-top: 20px;
  }
`;

export const StyledInputText = styled.input`
  width: 100%;
  label + & {
    margin-top: 4px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 400px;
  label + & {
    margin-top: 4px;
  }
`;
