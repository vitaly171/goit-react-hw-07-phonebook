import React from 'react';
import {useState} from 'react';
import s from './Form.module.css';
import { toast } from 'react-toastify';
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from  '../../redux/contactsRedux/operations';

const Form = props => {

  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');
  const [error, setError]=useState('');

  const contacts = useSelector(state => state.contacts)

  const handleChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'name':
        setNewName(value);
        break;

      case 'number':
        setNewNumber(value);
        break;
        
      default: toast.error(`There are no type input "${name}"`);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const validateForm = newName.trim();

    if (contacts.some(contact => contact.name===newName)){
      return toast.error(`${validateForm} Contact already exists`);
    }

    else {
      props.onSubmit(newName, newNumber);
      setNewName('');
      setNewNumber(''); 
      event.target.reset();
      setError('');
    }
  }

  return (
    
      <form className={s.form} onSubmit = {handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter name"
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label>
          <input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must contain digits and also can contain : spaces, dashes, parentheses and start with '+' "
          required
           placeholder="Enter phone number"
            onChange={handleChange}
            className={s.input}
          >
          </input>
        </label>
      <button className={s.button} type="submit">
        {' '}Add contact{' '}
      </button>
      </form>
  );

}

Form.propTypes = {
  onSubmit: PropTypes.any,
}

  const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(addContact({name, number})),
  });
  

export default connect(null, mapDispatchToProps)(Form);
  
