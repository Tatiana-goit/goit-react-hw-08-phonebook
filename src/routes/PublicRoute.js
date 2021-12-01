import { Navigate } from 'react-router-dom';

export default function PublicRoute({ isAuth, component: Component }) {
  console.log("6666666");
  return <>{isAuth ? <Navigate to="/contacts" /> : <Component />}</>;
}
