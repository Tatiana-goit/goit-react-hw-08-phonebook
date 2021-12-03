import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { Notify } from '../../utils/notifications';

import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selector';
import s from './ContactForm.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const comparableElement = contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase(),
    );
    if (comparableElement) {
      resetForm();
      return Notify.error(`${name.toUpperCase()}\nis already in contacts!`);
    }

    const includedNumber = contacts.find(
      (contact) =>
        contact.number.replace(/[^0-9]/g, "") === number.replace(/[^0-9]/g, "")
    );


    if (includedNumber) {
      resetForm();
      return Notify.error(`This number is already in contacts as\n${includedNumber.name.toUpperCase()}`);
    }


    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.title}>
          {' '}
          <RiContactsBook2Fill /> Phonebook
        </h1>

        <label className={s.label}>
          <span className={s.name}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          ></input>
        </label>

        <label className={s.label}>
          <span className={s.name}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          ></input>
        </label>

        <button className={s.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
