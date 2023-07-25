// ACTIONS
export const ADD_HABBIT = "Add Habbit";
export const DELETE_HABBIT = "Delete Habbit";
export const TOGGLE_HABIT = "Toggle Habbit";

// ACTION Creators
export const addHabbit = (text, date) => ({
  text,
  date,
  type: ADD_HABBIT,
});

export const deleteHabbit = (index) => ({
  index,
  type: DELETE_HABBIT,
});

export const toggleHabbit = (index) => ({
  index,
  type: TOGGLE_HABIT,
});
