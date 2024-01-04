import { useState } from 'react';
import { Form, FormLabel } from './PhonebookForm.styled';
import { addContact } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PhonebookForm = () => {
  const [inputs, setInputs] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  const handleChange = event => {
    const { name, value } = event.target;

    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!inputs.name.trim() || !inputs.number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    const duplicate = items.find(
      item => item.name.toLowerCase() === inputs.name.toLowerCase()
    );
    if (duplicate) {
      alert(`${inputs.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...inputs,
      id: nanoid(),
    };

    console.log(newContact);

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
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <TextField
          value={inputs.name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          id="outlined-basic"
          variant="outlined"
        />
      </FormLabel>

      <FormLabel>
        Number
        <TextField
          value={inputs.number}
          onChange={handleChange}
          type="tel"
          name="number"
          required
          id="outlined-basic"
          variant="outlined"
        />
      </FormLabel>
      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Form>
  );
};

export default PhonebookForm;
