import React from 'react';
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import {useSelector} from 'react-redux';


export default function App() {

  const error = useSelector((state) => state.contacts.error); 


  return (
    <Container>
      <Section title="Phonebook">
      {error && <p style = {{color:'red'}}>{error}</p>}
        <Form />
      </Section>
      <Section title="Contacts">
      <Filter />
      <ContactList />
      </Section>
    </Container>
  );
}

