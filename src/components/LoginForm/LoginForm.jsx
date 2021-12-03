import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operation';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
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
    const user = { email, password };
    dispatch(login(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Login</h2>
        <input
          className={s.input}
          text="mail"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className={s.input}
          text="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />

        <button type="submit">log in</button>
        <p className={s.text}>
          Don't have an account? 
          <NavLink to="/registration" className={s.link}>
          {' '} Sign up
          </NavLink>
        </p>
      </form>
    </>
  );
}
