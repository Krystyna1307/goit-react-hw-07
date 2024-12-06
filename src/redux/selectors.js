export const selectContacts = (state) => state.contacts.contacts.items;
export const selectFilteredContacts = (state) => state.filters.filters.name;

export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
