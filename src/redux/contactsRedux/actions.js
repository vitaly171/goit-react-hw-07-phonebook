import {createAction} from '@reduxjs/toolkit';

export const fetchContactsRequst = createAction('contacts/fetchContactsRequst');

export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequst = createAction('contacts/addContactsRequst');

export const addContactsSuccess = createAction('contacts/addContactsSuccess');

export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactRequst = createAction('contacts/deleteContact');

export const deleteContactSuccess = createAction('contacts/deleteContact');

export const deleteContactError = createAction('contacts/deleteContact');

export const filterContacts = createAction('constcts/filter');