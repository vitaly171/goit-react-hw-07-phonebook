import { useState } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = shortid.generate();
  const contactNumberId = shortid.generate();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputForm = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        toast.error(`There are no type input "${name}"`);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const validateForm = name.trim();
    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${validateForm} Contact already exists`);
    }

    if (name === '') {
      return toast.error('Please enter contact name');
    }

    if (number === '') {
      return toast.error('Please enter contact number');
    }

    dispatch(contactsActions.addContact(name, number));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <label>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          placeholder="Enter name"
          value={name}
          onChange={handleInputForm}
          id={contactNameId}
        />
      </label>
      <label>
        <input
          className={s.input}
          type="tell"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must contain digits and also can contain : spaces, dashes, parentheses and start with '+' "
          placeholder="Enter phone number"
          value={number}
          onChange={handleInputForm}
          id={contactNumberId}
        />
      </label>

      <button className={s.button} type="submit">
        {' '}
        Add Contact{' '}
      </button>
    </form>
  );
}

export default ContactForm;
