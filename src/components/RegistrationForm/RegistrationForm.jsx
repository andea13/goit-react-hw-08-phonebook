import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { register } from '../../redux/auth/operations';
import { useState } from 'react';
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
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  // const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      !inputs.name.trim() ||
      !inputs.email.trim() ||
      !inputs.password.trim()
    ) {
      alert('Please fill in all the fields');
      return;
    }

    console.log(inputs);

    const newUser = {
      ...inputs,
      id: nanoid(),
    };

    console.log(newUser);

    dispatch(register(newUser));
    reset();
  };

  const reset = () => {
    setInputs({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <RegistrationFormContainer>
      <RegistrationFormTitle>Please, fill in to register</RegistrationFormTitle>
      <RegistrationFormWrapper onSubmit={handleSubmit}>
        <RegistrationFormList>
          <RegistrationFormItem>
            <RegistrationFormLabel>
              Username
              <RegistrationFormInput
                value={inputs.name}
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>
          <RegistrationFormItem>
            <RegistrationFormLabel>
              Email
              <RegistrationFormInput
                value={inputs.email}
                onChange={handleChange}
                type="email"
                name="email"
                autoComplete="off"
                required
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>

          <RegistrationFormItem>
            <RegistrationFormLabel>
              Password
              <RegistrationFormInput
                value={inputs.password}
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="off"
                required
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
