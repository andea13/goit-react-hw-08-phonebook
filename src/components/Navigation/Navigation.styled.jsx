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
