import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, addData, deleteData } from '../../services/api'


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const contacts = await fetchData();
    return contacts;
    }
)

export const addContact = createAsyncThunk('contacts/addContact', async ({name, number}) => {
    const contacts = await addData(name, number);
    return contacts;
    }
)

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    const contacts = await deleteData(id);
    return contacts;
    }
)