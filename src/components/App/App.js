import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import AppBar from '../AppBar/AppBar';
import Loader from '../../helpers/Loader/Loader';
import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivataRoute';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsAuth,
  getToken,
  getIsFetchCurrentUser,
} from '../../redux/auth/auth-selector';
import { useEffect } from 'react';
import { currentUser } from '../../redux/auth/auth-operation';


const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage.js' /* webpackChunkName: "homePage" */),
);

const Phonebook = lazy(() =>
  import('../../pages/Phonebook/Phonebook' /* webpackChunkName: "phonebook" */),
);

const Login = lazy(() =>
  import('../../pages/Login/Login' /* webpackChunkName: "login" */),
);

const Registration = lazy(() =>
  import(
    '../../pages/Registration/Registration'
    /* webpackChunkName: "registration" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const token = useSelector(getToken);
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  return (
    <div className="App">
      <AppBar />
      {isFetchCurrentUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              exact
              path="/"
              element={<PublicRoute isAuth={isAuth} component={HomePage} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute isAuth={isAuth} component={Phonebook} />}
            />
            <Route
              path="/login"
              element={<PublicRoute isAuth={isAuth} component={Login} />}
            />
            <Route
              path="/registration"
              element={<PublicRoute isAuth={isAuth} component={Registration} />}
            />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}
