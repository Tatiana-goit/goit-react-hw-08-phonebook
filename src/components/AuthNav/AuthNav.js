import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav>
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
