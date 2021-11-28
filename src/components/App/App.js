import './App.css';
import { RiContactsBook2Fill, RiContactsFill } from 'react-icons/ri';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export default function App() {
  return (
    <div className="App">
      <Container>
        <h1>
          <RiContactsBook2Fill />
          Phonebook
        </h1>
        <ContactForm />
        <h2>
          <RiContactsFill />
          Contacts
        </h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}
