import { ContactsList } from 'components/ContactsList/ContactsList';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm.jsx';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { selectFilteredContacts } from '../redux/contacts/selectors';
// import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  console.log('Contacts:', contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Contacts:', contacts);
  }, [contacts]);

  return (
    <>
      <PhonebookForm />
      <ContactsFilter />
      {contacts.length > 0 ? (
        <ContactsList contacts={contacts} />
      ) : (
        <p>You have not added any contacts yet.</p>
      )}
    </>
  );
};

export default ContactsPage;
