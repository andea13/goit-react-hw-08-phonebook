export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const handleFetchAllContactsFullfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  console.log('Action payload:', action.payload);
  console.log('State before update:', state);
  if (action.payload) {
    state.contacts.isLoading = false;
    state.contacts.error = null;
    state.contacts.items = [...state.contacts.contacts.items, action.payload];
    console.log('State after update:', state);
  } else {
    console.error('Invalid action payload:', action.payload);
  }
};

export const handleDeleteContactFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  const deletedIdIndex = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );

  if (deletedIdIndex !== -1) {
    state.contacts.items.splice(deletedIdIndex, 1);
  }
};
