import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
    return (
        <>
        <ul className={s.list}>
        <li>
          <NavLink to="/registration" className={s.link} activeclassname={s.activeLink}>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
            Log in
          </NavLink>
        </li>
        </ul>
        </>
    )
};
