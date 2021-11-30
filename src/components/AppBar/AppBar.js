import {useSelector} from 'react-redux'
import Navigation from '../Navigation/Navigation';
import {getIsAuth} from '../../redux/auth/auth-selector'
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu'
import s from './AppBar.module.css'

export default function AppBar() {
  const isAuth = useSelector(getIsAuth)
  return (
    <header className={s.header}>
      <Navigation />
      {isAuth? <UserMenu/>:<AuthNav/>}
    </header>
  );
}
