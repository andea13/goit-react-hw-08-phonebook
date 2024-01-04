import styled from '@emotion/styled';
import backgroundImage from '../../components/images/pexels-photo-45718.webp';
export const HomeSection = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${backgroundImage});
  width: 100%;
  padding-top: 370px;
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
  margin-top: 0;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  max-width: 696px;
  color: #fff;
  font-weight: 900;
  font-size: 26px;
  line-height: 1.61;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 44px;
    line-height: 1.36;
  }
`;
