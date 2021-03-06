import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/auth-operation';
import s from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert('Check input name please');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Sign up</h2>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          pattern="[0-9]{8,}"
          title="Пароль должен состоять минимум из 8 цифр"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">log in</button>
        <p className={s.text}>
          Already have an account?
          <NavLink to="/login" className={s.link}>
            {' '}
            log in{' '}
          </NavLink>
        </p>
      </form>
    </>
  );
}
