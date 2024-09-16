import LoginForm from 'components/LoginForm/LoginForm';
import styled from 'styled-components';
import backgroundImage from 'components/images/phone_background.png';

const LoginPage = () => {
  const LoginPageBackground = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    margin: 0; /* Ensure no margin */
    padding: 0; /* Ensure no padding */
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <LoginPageBackground>
      <LoginForm />
    </LoginPageBackground>
  );
};

export default LoginPage;
