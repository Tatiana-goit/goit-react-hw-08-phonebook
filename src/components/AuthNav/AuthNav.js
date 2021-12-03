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
        className={s.link}
        // activeClassName={s.activeLink}
        // activeStyle={styles.activeLink}
        // activeStyle={{ color: '#ddd' }}

      >
        Sign up
      </NavLink>

      <NavLink to="/login" className={s.link}
      //  activeClassName={s.activeLink}
      // activeStyle={styles.activeLink}
      // activeStyle={{ backgroundColor: '#88e' }}
      >

        Log in
      </NavLink>
    </nav>
  );
}
