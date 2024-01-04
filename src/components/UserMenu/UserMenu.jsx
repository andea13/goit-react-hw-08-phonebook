import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { UserMenuButton, UserMenuContainer } from './UserMenu.styled';
import { logOut } from '../../redux/auth/authOperations';
const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <p>Welcome, {name && name}</p>
      <UserMenuButton onClick={handleLogOut}>Logout</UserMenuButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
