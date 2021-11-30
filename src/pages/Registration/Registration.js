import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operation';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
    const user = { name, email, password };
    dispatch(register(user));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          text="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
        <br /> <br />
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
