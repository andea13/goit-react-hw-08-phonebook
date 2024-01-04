import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { register } from '../../redux/auth/authOperations';
import { useState } from 'react';
import {
  RegistrationFormContainer,
  RegistrationFormTitle,
  RegistrationFormWrapper,
  RegistrationFormList,
  RegistrationFormLabel,
  RegistrationFormItem,
} from './RegistrationForm.styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
              <TextField
                value={inputs.name}
                type="text"
                name="name"
                autoComplete="off"
                onChange={handleChange}
                required
                id="outlined-basic"
                variant="outlined"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>
          <RegistrationFormItem>
            <RegistrationFormLabel>
              Email
              <TextField
                value={inputs.email}
                onChange={handleChange}
                type="email"
                name="email"
                autoComplete="off"
                required
                id="outlined-basic"
                variant="outlined"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>

          <RegistrationFormItem>
            <RegistrationFormLabel>
              Password
              <TextField
                value={inputs.password}
                onChange={handleChange}
                type="password"
                name="password"
                autoComplete="off"
                required
                id="outlined-basic"
                variant="outlined"
              />
            </RegistrationFormLabel>
          </RegistrationFormItem>
        </RegistrationFormList>

        <Button type="submit" variant="contained">
          Register
        </Button>
      </RegistrationFormWrapper>
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
