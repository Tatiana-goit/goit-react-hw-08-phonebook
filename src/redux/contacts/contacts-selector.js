import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = state => state.contacts.contactItems;


export const getContacts = state => state.contacts.contactsList.contactItem;

export const getFilter = state => state.contacts.filter;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

