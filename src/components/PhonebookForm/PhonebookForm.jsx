import { useState } from 'react';
import { Form, FormLabel } from './PhonebookForm.styled';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import toast, { Toaster } from 'react-hot-toast';

const PhonebookForm = () => {
  const [inputs, setInputs] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts) || [];
  console.log('Contacts:', contacts);

  const handleChange = event => {
    const { name, value } = event.target;

    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      !inputs.name ||
      !inputs.name.trim() ||
      !inputs.number ||
      !inputs.number.trim()
    ) {
      toast.error(`Please fill out all the fields`);
      return;
    }

    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === inputs.name.toLowerCase()
    );
    if (duplicate) {
      toast.error(`${inputs.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...inputs,
      id: nanoid(),
    };

    console.log('New contact:', newContact);

    dispatch(addContact(newContact))
      .then(() => {
        reset();
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const reset = () => {
    setInputs({ name: '', number: '' });
  };

  return (
    <>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: 'red',
              duration: 2000,
              position: 'top-right',
              animation: 'custom-enter 1s ease, custom-exit 1s ease',
            },
          },
        }}
      />
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <TextField
            value={inputs.name}
            onChange={handleChange}
            type="text"
            name="name"
            variant="outlined"
            autoComplete="on"
          />
        </FormLabel>

        <FormLabel>
          Number
          <TextField
            value={inputs.number}
            onChange={handleChange}
            type="tel"
            name="number"
            variant="outlined"
            autoComplete="on"
          />
        </FormLabel>
        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default PhonebookForm;
