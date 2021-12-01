import Container from '../../components/Container/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { RiContactsBook2Fill, RiContactsFill } from 'react-icons/ri';

export default function Phonebook() {
  console.log('1111111111111111111111');
  return (
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
  );
}
