import PhonebookForm from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from '../components/ContactsFilter/ContactsFilter';
import {
  PhonebookTitle,
  PhonebookContainer,
  ContactsContainer,
  ContactsTitle,
} from './App.styled';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import { Layout } from './Layout';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
        </Route>
      </Routes>
      {/* <PhonebookContainer>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <PhonebookForm />
      </PhonebookContainer>
      <ContactsContainer>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsFilter />
        <ContactsList />
      </ContactsContainer> */}
    </div>
  );
};

export default App;
