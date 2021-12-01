import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuth, component: Component }) {
  console.log('55555555555555555');
  return <> 
  <Component/>
  {/* {isAuth ? <Component /> : <Navigate to="/login" />} */}
  
   </>;
}
