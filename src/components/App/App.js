import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
// import { lazy } from 'react';

import Loader from 'react-loader-spinner';
import AppBar from '../AppBar/AppBar';

//////edit
import HomePage from '../../pages/HomePage/HomePage';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';
import Phonebook from '../../pages/Phonebook/Phonebook';

// const HomePage = lazy(() =>
//   import('../../pages/HomePage/HomePage.js' /* webpackChunkName: "homePage" */),
// );

// const Phonebook = lazy(() => {
//   import('../../pages/Phonebook/Phonebook'); /* webpackChunkName: "phonebook" */
// });

// const Login = lazy(() =>
//   import('../../pages/Login/Login' /* webpackChunkName: "login" */),
// );

// const Registration = lazy(() => {
//   import(
//     '../../pages/Registration/Registration'
//   ); /* webpackChunkName: "registration" */
// });

export default function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallbak={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Phonebook" element={<Phonebook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Suspense>
    </div>
  );
}
