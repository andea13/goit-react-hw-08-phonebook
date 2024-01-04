import styled from '@emotion/styled';
import { NavLink as StyledLink } from 'react-router-dom';

export const AuthMenuWrapper = styled.div`
  //   display: flex;
`;

export const AuthMenuList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const AuthNavListItem = styled.li`
  &:last-child {
    margin-left: 30px;
  }
`;

export const NavLink = styled(StyledLink)`
  color: #fff;
`;
