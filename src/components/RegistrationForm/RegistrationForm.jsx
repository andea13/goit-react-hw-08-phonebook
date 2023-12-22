import {
  RegistrationFormContainer,
  RegistrationFormTitle,
  RegistrationFormWrapper,
  RegistrationFormList,
  RegistrationFormLabel,
  RegistrationFormInput,
  RegistrationFormButton,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>Please, fill in to register</RegistrationFormTitle>
      <RegistrationFormWrapper>
        <RegistrationFormList>
          <li>
            <RegistrationFormLabel>
              Username
              <RegistrationFormInput
                type="text"
                name="name"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </li>
          <li>
            <RegistrationFormLabel>
              Email
              <RegistrationFormInput
                type="email"
                name="email"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </li>
          <li>
            <RegistrationFormLabel>
              Password
              <RegistrationFormInput
                type="password"
                name="password"
                autoComplete="off"
              />
            </RegistrationFormLabel>
          </li>
        </RegistrationFormList>

        <RegistrationFormButton type="submit">Register</RegistrationFormButton>
      </RegistrationFormWrapper>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
