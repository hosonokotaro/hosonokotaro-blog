import styled from 'styled-components';

// FIXME: component 分割したい
export const StyledForm = styled.form`
  margin-top: 20px;
`;

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
