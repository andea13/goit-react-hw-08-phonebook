import styled from '@emotion/styled';
import backgroundImage from '../../components/images/light-background.png';

export const LoginFormContainer = styled.div`
  background-image: url(${backgroundImage});
  position: relative; 
  z-index: 10; 
  padding: 20px;
  border-radius: 10px;
  border: none;
  @media (min-width: 768px) {
  top: -42px; 
  right: -222px;
  ; 
`;

export const LoginFormWrapper = styled.form`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  margin: auto auto;
  min-width: 280px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 28px;
    width: 500px;
  }
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
  font-size: 18px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 28px;
  }
`;

export const LoginFormTitle = styled.h1`
  text-align: center;
  justify-content: center;
  font-size: 30px;
`;
