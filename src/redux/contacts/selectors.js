import { createSelector } from 'reselect';

export const selectFilter = state => state.contacts.filter;
export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
