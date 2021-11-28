import { Link} from 'react-router-dom';


export default function Navigation() {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Phonebook">Phonebook</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>

        </ul>
      </nav>
    )
    
};
