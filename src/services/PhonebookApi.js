import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchContacts() {
  const result = await axios.get('/contacts');
  return result.data;
}

export async function addContact(contact) {
  const result = await axios.post('/contacts', contact);
  return result.data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}

export async function register(user) {
  const result = await axios.post('/users/signup', user);
  token.set(result.data.token);
  return result.data;
}

export async function login(user) {
  const result = await axios.post('/users/login', user);
  token.set(result.data.token);
  return result.data;
}

export async function currentUser() {
  const result = await axios.get('/users/current');
  token.set(result.data.token);
  return result.data;
}

export async function logout() {
  await axios.post('/users/logout');
  token.unset();
}
