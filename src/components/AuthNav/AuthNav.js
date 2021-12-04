import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

// const styles = {
//   activeLink: {
//     color: '#E84A5F',
//   },
// };
export default function AuthNav() {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/registration"
        className={({ isActive }) => (isActive ? s.link : s.activeLink)}
      >
        Sign up
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.link : s.activeLink)}
      >
        Log in
      </NavLink>
    </nav>
  );
}
