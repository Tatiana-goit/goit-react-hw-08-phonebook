import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.navigation}>
      {/* <ul className={s.list}> */}

      <NavLink
        to="/registration"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Sign up
      </NavLink>

      <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
        Log in
      </NavLink>

      {/* </ul> */}
    </nav>
  );
}
