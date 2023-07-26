// import { ADD_HABBIT, DELETE_HABBIT, TOGGLE_HABIT, toggleHabbit } from "../action/actions";
import { createSlice } from "@reduxjs/toolkit";
let id = 1;

const initialState = {
  habbits: [],
};

const habbitSlice = createSlice({
  name: "habbit",
  initialState,
  reducers: {
    // this is ADD ACTION
    addHabbit: (state, action) => {
      const today = new Date();
      const sundayDate = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();
      const habbit = {
        _id: id++,
        text: action.payload,
        weekData: [
          {
            id: 0,
            day: "Sunday",
            dd: sundayDate,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 1,
            day: "Monday",
            dd: sundayDate + 1,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 2,
            day: "Tuesday",
            dd: sundayDate + 2,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 3,
            day: "Wednesday",
            dd: sundayDate + 3,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 4,
            day: "Thursday",
            dd: sundayDate + 4,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 5,
            day: "Friday",
            dd: sundayDate + 5,
            mm: month,
            year: year,
            isDone: null,
          },
          {
            id: 6,
            day: "Saturday",
            dd: sundayDate + 6,
            mm: month,
            year: year,
            isDone: null,
          },
        ],
      };
      state.habbits.push(habbit);
      // return {
      //     ...state,
      //     habbits: [...state.habbits, habbit],
      // };
    },
    // DELETE ACTION
    deleteHabbit: (state, action) => {
        state.habbits.splice(action.payload, 1);
    },
  },
});

export const habbitReducer = habbitSlice.reducer;

export const habbitActions = habbitSlice.actions;

// export function habbitReducer(state = initialState, action){
//     switch(action.type){
//         case ADD_HABBIT:
//             return state;
//         case DELETE_HABBIT:
//             return state;
//         case TOGGLE_HABIT:
//             return state;
//         default:
//             return state;
//     }

// }
