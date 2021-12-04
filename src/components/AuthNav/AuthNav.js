import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/registration"
        className={({ isActive }) => (isActive ? s.activeLink: s.link )}
      >
        Sign up
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink: s.link )}
      >
        Log in
      </NavLink>
    </nav>
  );
}
