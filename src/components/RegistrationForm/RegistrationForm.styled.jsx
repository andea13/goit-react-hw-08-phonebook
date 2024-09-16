import styled from '@emotion/styled';
import backgroundImage from '../../components/images/light-background.png';

export const RegistrationFormContainer = styled.div`
  background-image: url(${backgroundImage});
  position: relative;
  z-index: 10; 
  padding: 20px;
  border-radius: 10px;
  border: none;
  @media (min-width: 768px) {
  top: -29px; 
  right: -192px;
  ; 
`;

export const RegistrationFormWrapper = styled.form`
  // padding: 0 20px;
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
  font-size: 18px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 28px;
  }
`;

export const RegistrationFormTitle = styled.h1`
  text-align: center;
  justify-content: center;
  font-size: 30px;
`;
