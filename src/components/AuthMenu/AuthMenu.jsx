import { NavLink } from 'react-router-dom';
import {
  AuthMenuWrapper,
  AuthMenuList,
  AuthNavListItem,
} from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthMenuWrapper>
      <AuthMenuList>
        <AuthNavListItem>
          <NavLink to="/register">Register</NavLink>
        </AuthNavListItem>
        <AuthNavListItem>
          <NavLink to="/login">Login</NavLink>
        </AuthNavListItem>
      </AuthMenuList>
    </AuthMenuWrapper>
  );
};
