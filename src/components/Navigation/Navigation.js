import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Phonebook" className={s.link} activeclassname={s.activeLink} >
            Phonebook
          </NavLink>
        </li>
        <li>
          <NavLink to="/Registration" className={s.link} activeclassname={s.activeLink}>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
            Log in
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}
