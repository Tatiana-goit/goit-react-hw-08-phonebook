import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operation';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={s.navigation}>
      <p className={s.title}>{userName}</p>
      <button
        type="button"
        onClick={handleLogout}
        className={(s.button, s.addButton)}
      >
        <ExitToAppIcon />
      </button>
    </nav>
  );
}
