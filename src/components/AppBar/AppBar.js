import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import {
  getIsAuth,
  getIsFetchCurrentUser,
} from '../../redux/auth/auth-selector';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import Loader from '../../helpers/Loader/Loader';

export default function AppBar() {
  const isAuth = useSelector(getIsAuth);
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  return (
    <>
      <header className={s.header}>
      <Navigation/>
        {!isFetchCurrentUser ? (isAuth ? (<UserMenu />) : (<AuthNav />)) : <Loader/> }
      </header>
    </>
  );

  
  //   return (
  //   <header className={s.header}>
  //     <Navigation />
  //      {isAuth ? <UserMenu /> : <AuthNav />}
  //   </header>
  // );


  // return (
  //   <header className={s.header}>
  //     <Navigation/>
  //     {isFetchCurrentUser ? <Loader/> :( {isAuth ? <UserMenu/> : <AuthNav/>})}
  //   </header>
  // );

  // return (
  //   <header className={s.header}>
  //     {isFetchCurrentUser ? (<Loader />) :
  //     (<Navigation />
  //      (isAuth ? <UserMenu /> : <AuthNav />)}
  //   </header>
  // );

  // return (
  //   <header className={s.header}>
  //   <Navigation />
  //   {isFetchCurrentUser ? (<Loader/>) :  isAuth ? <UserMenu /> : <AuthNav />}

  //   </header>
  // );
}
