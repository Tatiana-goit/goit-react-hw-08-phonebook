import {NavLink} from 'react-router-dom';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Welcome to the Phonebook!</h2>
      <p className={s.text}>
        In this app, you can store and manage your contacts. 
        <br/>
        To get started, you need to 
        <NavLink to="/Registration" className={s.link}> create an account </NavLink>
        or 
        <NavLink to="/login" className={s.link}> log in </NavLink>
        <br/>
        if you already have one.
      </p>
    </div>
  );
}
