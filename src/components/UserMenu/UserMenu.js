import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operation';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <p>{userName}</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </>
  );
}
