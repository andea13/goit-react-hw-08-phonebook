import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOperations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log('filteredContacts:', filteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {filteredContacts &&
        filteredContacts.map(({ name, number, _id }) => (
          <ContactsListItem name={name} number={number} key={_id} id={_id} />
        ))}
    </ContactList>
  );
};
