import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { login } from '../../redux/auth/authOperations';

import {
  LoginFormContainer,
  LoginFormWrapper,
  LoginFormTitle,
  LoginFormList,
  LoginFormItem,
  LoginFormLabel,
} from './LoginForm.styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginForm = () => {
  const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    setLoginInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!loginInputs.email.trim() || !loginInputs.password) {
      alert('Please fill in all the fields');
      return;
    }

    const registeredUser = {
      ...loginInputs,
      id: nanoid(),
    };

    dispatch(login(registeredUser))
      .then(() => {
        reset();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const reset = () => {
    setLoginInputs({
      email: '',
      password: '',
    });
  };

  return (
    <LoginFormContainer>
      <LoginFormTitle>Please, log in </LoginFormTitle>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <LoginFormList>
          <LoginFormItem>
            <LoginFormLabel>
              Email
              <TextField
                type="email"
                name="email"
                value={loginInputs.email}
                onChange={handleChange}
                autoComplete="off"
                id="outlined-basic"
                variant="outlined"
              />
            </LoginFormLabel>
          </LoginFormItem>
          <LoginFormItem>
            <LoginFormLabel>
              Password
              <TextField
                type="password"
                name="password"
                value={loginInputs.password}
                onChange={handleChange}
                autoComplete="off"
                id="outlined-basic"
                variant="outlined"
              />
            </LoginFormLabel>
          </LoginFormItem>
        </LoginFormList>

        <Button type="submit" variant="contained">
          Log In
        </Button>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};

export default LoginForm;
