import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/auth/auth-operation'

export default function Navigation() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    console.log('1111111');
    dispatch(logout())
  }
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li>
          <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink} >
            Phonebook
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/registration" className={s.link} activeclassname={s.activeLink}>
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
            Log in
          </NavLink>
        </li> */}
        <li>
          <button type='button' onClick={handleLogout}>Log Out</button>
        </li>

      </ul>
    </nav>
  );
}
