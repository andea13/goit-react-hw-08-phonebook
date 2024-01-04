import { NavLink } from './Navigation.styled';
import {
  MainNavList,
  MainNavListItem,
  MainNavWrapper,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNavWrapper>
      <MainNavList>
        <MainNavListItem>
          <NavLink to="/">Home Page</NavLink>
        </MainNavListItem>

        <MainNavListItem>
          <NavLink to="/contacts">Contacts</NavLink>
        </MainNavListItem>
      </MainNavList>
    </MainNavWrapper>
  );
};

export default Navigation;
