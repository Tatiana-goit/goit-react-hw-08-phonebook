import { Navigate } from 'react-router-dom';

export default function PrivataRoute({ isAuth, component: Component }) {
  return <> {isAuth ? <Component /> : <Navigate to="/login" />} </>;
}
