import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Span, SubmitButton } from './ContactForm.styled';
import {
  nameValidationMessage,
  numberValidationMessage,
} from 'assets/validationMessages';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const valueExists = (key, value) => {
    if (key === 'name') {
      const normalizedValue = value.toLowerCase();
      return contacts.find(
        contact => contact[key].toLowerCase() === normalizedValue
      );
    }

    return contacts.find(contact => contact[key] === value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (valueExists('name', name)) {
      alert(`${name} вже є в контактах.`);
      return;
    }

    if (valueExists('number', number)) {
      alert(`Номер ${number} вже використовується.`);
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    resetState();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title={nameValidationMessage}
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={numberValidationMessage}
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default ContactForm;
