import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
} from './ContactsListItem.styled';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

export const ContactsListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsItem key={id}>
      <ContactsItemName>Name: {name} </ContactsItemName>
      <ContactsItemNumber>Phone: {number}</ContactsItemNumber>
      <Button type="button" onClick={handleDelete} variant="contained">
        Delete
      </Button>
    </ContactsItem>
  );
};
