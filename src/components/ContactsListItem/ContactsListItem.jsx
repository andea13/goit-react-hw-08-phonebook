import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemButton,
} from './ContactsListItem.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsItem key={id}>
      <ContactsItemName>Name: {name} </ContactsItemName>
      <ContactsItemNumber>Phone: {number}</ContactsItemNumber>
      <ContactsItemButton type="button" onClick={handleDelete}>
        Delete
      </ContactsItemButton>
    </ContactsItem>
  );
};
