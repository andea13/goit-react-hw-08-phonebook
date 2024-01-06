import { NavLink as StyledLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const MainNavWrapper = styled.nav`
  display: flex;
  padding: 0;
`;

export const MainNavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const MainNavListItem = styled.li`
  &:first-of-type {
    margin-right: 30px;
  }
`;

export const NavLink = styled(StyledLink)`
  color: #fff;

  &.active {
    color: #fce9af;
  }
`;
