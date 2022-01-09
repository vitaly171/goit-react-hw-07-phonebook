import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactList.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { fetchContacts, deleteContact } from  '../../redux/contactsRedux/operations';

export default function ContactList() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  

  const filteredList = contacts.filter(contact => contact.name.includes(filter))
  
  return ( 
  <div className={s.contacts}>
    {!contacts && <span>You have no contacts!</span>}
    {contacts &&
    <div>
      <ul className={s.list}>{filteredList.map(contact =>
        <li className={s.item}key={uuidv4()}>          
          {contact.name} : {contact.phone}
          <button className={s.button} type="button" onClick={()=> dispatch(deleteContact(contact.id))}>
            delete
          </button>
        </li>
        )}
      </ul>
    </div>
    }
  </div>)
}

