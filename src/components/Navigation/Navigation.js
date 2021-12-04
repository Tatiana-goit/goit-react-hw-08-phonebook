import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { getIsAuth } from '../../redux/auth/auth-selector';

export default function Navigation() {
  const isAuth = useSelector(getIsAuth);

  return (
    <nav className={s.navigation}>
      {isAuth ? (
        <NavLink
          to="/contacts"
          className={s.link}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink to="/" className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
          Home
        </NavLink>
      )}

  
    </nav>
  );
}
