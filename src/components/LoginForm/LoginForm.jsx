import {
  LoginFormContainer,
  LoginFormWrapper,
  LoginFormTitle,
  LoginFormList,
  LoginFormItem,
  LoginFormLabel,
  LoginFormInput,
  LoginFormButton,
} from './LoginForm.styled';

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginFormTitle>Please, log in </LoginFormTitle>
      <LoginFormWrapper>
        <LoginFormList>
          <LoginFormItem>
            <LoginFormLabel>
              Email
              <LoginFormInput type="email" name="email" />
            </LoginFormLabel>
          </LoginFormItem>
          <LoginFormItem>
            <LoginFormLabel>
              Password
              <LoginFormInput type="password" name="password" />
            </LoginFormLabel>
          </LoginFormItem>
        </LoginFormList>

        <LoginFormButton type="submit">Log In</LoginFormButton>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
