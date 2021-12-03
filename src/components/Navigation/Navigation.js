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
          activeclassname={s.activeLink}
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
          Home
        </NavLink>
      )}

  
    </nav>
  );
}
