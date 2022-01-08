import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const changeFilter = createAction('contacts/changeFilter');
const deleteContact = createAction('contacts/delete');

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
