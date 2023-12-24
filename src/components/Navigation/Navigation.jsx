// import ContactsPage from 'pages/ContactsPage';
// import HomePage from 'pages/HomePage';

import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
            HomePage
            {/* <HomePage /> */}
          </NavLink>
        </MainNavListItem>

        <MainNavListItem>
          <NavLink to="/contacts">
            Contacts
            {/* <ContactsPage /> */}
          </NavLink>
        </MainNavListItem>
      </MainNavList>
    </MainNavWrapper>
  );
};

export default Navigation;
