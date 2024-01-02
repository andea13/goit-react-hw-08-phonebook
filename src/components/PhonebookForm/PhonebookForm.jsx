import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './PhonebookForm.styled';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

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
        <FormInput
          value={inputs.name}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          value={inputs.number}
          onChange={handleChange}
          type="tel"
          name="number"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default PhonebookForm;
