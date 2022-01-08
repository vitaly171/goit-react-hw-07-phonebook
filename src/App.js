import { ToastContainer } from 'react-toastify';
import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Container from './components/Container';
import Section from './components/Section';

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
        <ToastContainer autoClose={3000} />
      </Section>
    </Container>
  );
}

export default App;

