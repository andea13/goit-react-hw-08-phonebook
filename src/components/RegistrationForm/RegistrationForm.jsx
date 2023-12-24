import {
  RegistrationFormContainer,
  RegistrationFormTitle,
  RegistrationFormWrapper,
  RegistrationFormList,
  RegistrationFormLabel,
  RegistrationFormInput,
  RegistrationFormButton,
  RegistrationFormItem,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>Please, fill in to register</RegistrationFormTitle>
      <RegistrationFormWrapper>
        <RegistrationFormList>
          <RegistrationFormItem>
            <RegistrationFormLabel>
              Username
              <RegistrationFormInput
                type="text"
                name="name"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>
          <RegistrationFormItem>
            <RegistrationFormLabel>
              Email
              <RegistrationFormInput
                type="email"
                name="email"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>

          <RegistrationFormItem>
            <RegistrationFormLabel>
              Password
              <RegistrationFormInput
                type="password"
                name="password"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>
        </RegistrationFormList>

        <RegistrationFormButton type="submit">Register</RegistrationFormButton>
      </RegistrationFormWrapper>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
