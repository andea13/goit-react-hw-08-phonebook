import styled from '@emotion/styled';
import backgroundImage from '../../components/images/homepage.png';
export const HomeSection = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${backgroundImage});
  width: 100%;
  height: 100vh;
  // padding-top: 370px;
  padding-bottom: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  display: block;
  position: absolute;
  top: 231px;
  left: 27px;
  padding: 0;
  margin: 0;
  max-width: 696px;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.61;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1200px) {
    top: 208px;
    left: 50px;
    font-size: 28px;
    line-height: 1.36;
  }
`;
