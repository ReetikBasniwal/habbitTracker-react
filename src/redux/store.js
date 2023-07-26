import { configureStore } from "@reduxjs/toolkit";
import { habbitReducer } from "./reducers/reducers";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./reducers/reducers"; // Import the functions you defined

// Load the state from local storage
const persistedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    habbitReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to store changes and save the state to local storage
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});
