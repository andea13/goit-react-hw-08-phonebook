import styled from '@emotion/styled';

export const LoginFormContainer = styled.div``;

export const LoginFormWrapper = styled.form`
  padding: 0 20px;
  margin: auto auto;
  width: 500px;
`;

export const LoginFormList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LoginFormItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  &:first-of-type {
    margin-bottom: 15px;
  }
`;

export const LoginFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 34px;
`;

export const LoginFormTitle = styled.h1`
  text-align: center;
  justify-content: center;
`;
