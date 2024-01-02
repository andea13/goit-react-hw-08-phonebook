import { ContactsList } from 'components/ContactsList/ContactsList';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const ContactsPage = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  return (
    isLogged && (
      <>
        <PhonebookForm />
        <ContactsFilter />
        <ContactsList />
      </>
    )
  );
};

export default ContactsPage;
