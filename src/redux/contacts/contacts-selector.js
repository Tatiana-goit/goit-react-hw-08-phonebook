import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state => state.contacts.contactItems;

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;

// export const getFiltredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase()),
//     ),
// );

export const getFiltredContacts = state => state.contacts.contacts.contactItems;
