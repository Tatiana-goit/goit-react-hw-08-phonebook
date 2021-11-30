import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert('Check input name please');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          text="mail"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <br /> <br />
        <input
          text="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <br /> <br />
        <button type="submit"> add</button>
      </form>
    </>
  );
}
