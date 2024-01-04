import styled from '@emotion/styled';

export const RegistrationFormContainer = styled.div``;

export const RegistrationFormWrapper = styled.form`
  padding: 0 20px;
  margin: auto auto;
  width: 500px;
`;

export const RegistrationFormList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const RegistrationFormItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const RegistrationFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 34px;
`;

export const RegistrationFormTitle = styled.h1`
  text-align: center;
  justify-content: center;
`;
