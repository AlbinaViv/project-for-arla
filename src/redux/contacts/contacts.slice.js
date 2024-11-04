import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.items.push(action.payload);
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = true;
        // state.items.push(action.payload);
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

// Код решти редюсерів

// reducers: {
//   addContactAction: (state, { payload }) => {
//     state.items = [...state.items, payload];
//   },
//   deleteContactAction: (state, { payload }) => {
//     state.items = state.items.filter((contact) => contact.id !== payload);
//   },
//   fetchingInProgress(state) {
//     state.isLoading = true;
//   },
//   fetchingSuccess(state, action) {
//     state.isLoading = false;
//     state.error = true;
//     // state.items = action.payload;
//     state.items.push(...action.payload);
//   },
//   fetchingError(state, action) {
//     state.isLoading = false;
//     // state.error = action.payload;
//     state.error = true;
//   },
// },

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactAction,
  deleteContactAction,
} = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
