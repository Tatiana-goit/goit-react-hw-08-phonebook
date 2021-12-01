import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts,getContacts } from '../../redux/contacts/contacts-selector';
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFiltredContacts);
    // const contacts = useSelector(getContacts);
    console.log(contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    // <></>
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.info}>
            <p className={s.name}> {name}</p>
            <p className={s.number}> {number}</p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
