import { createSlice } from "@reduxjs/toolkit";
let id = 1;

const initialState = {
  habbits: [],
};
// 
const formatDate = (day) => { 
  const todayDate = new Date();
  const previousSunday = new Date(todayDate);
  previousSunday.setDate(todayDate.getDate() - day);
  return previousSunday.toLocaleDateString("en-GB");
};
// 

const habbitSlice = createSlice({
  name: "habbit",
  initialState,
  reducers: {
    // this is ADD ACTION
    addHabbit: (state, action) => {
      const today = new Date();
      console.log(today);
      const habbit = {
        _id: id++,
        text: action.payload,
        weekData: [
          {
            id: 0,
            day: "Sunday",
            date: formatDate(today.getDay()),
            isDone: null,
          },
          {
            id: 1,
            day: "Monday",
            date: formatDate(today.getDay()+1),
            isDone: null,
          },
          {
            id: 2,
            day: "Tuesday",
            date: formatDate(today.getDay()+2),
            isDone: null,
          },
          {
            id: 3,
            day: "Wednesday",
            date: formatDate(today.getDay()+3),
            isDone: null,
          },
          {
            id: 4,
            day: "Thursday",
            date: formatDate(today.getDay()+4),
            isDone: null,
          },
          {
            id: 5,
            day: "Friday",
            date:  formatDate(today.getDay()+5),
            isDone: null,
          },
          {
            id: 6,
            day: "Saturday",
            date: formatDate(today.getDay()+6),
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
        const index = state.habbits.findIndex(
            (habbit) => habbit._id === action.payload
          );
          if (index !== -1) {
            state.habbits.splice(index, 1);
    
            // Update local storage after removing the habit
            localStorage.setItem("reduxState", JSON.stringify(state));
          }
    },
    // MARK DONE ACTION
    markDone: (state, action) => {
      const { habbitId, dayId } = action.payload;
      console.log(habbitId);
      console.log(dayId);
      const habitToUpdate = state.habbits.find(
        (habbit) => habbit._id === habbitId
      );
      if (habitToUpdate) {
        const dayToUpdate = habitToUpdate.weekData.find(
          (day) => day.id === dayId
        );
        if (dayToUpdate) {
          console.log(`Marking habit ${habbitId} as done on day ${dayId}`);
          dayToUpdate.isDone = true;
        }
      }
    },
    // MARK NOT DONE ACTION
    markNotDone: (state, action) => {
      const { habbitId, dayId } = action.payload;
      const habitToUpdate = state.habbits.find(
        (habbit) => habbit._id === habbitId
      );
      if (habitToUpdate) {
        const dayToUpdate = habitToUpdate.weekData.find(
          (day) => day.id === dayId
        );
        if (dayToUpdate) {
          console.log(`Marking habit ${habbitId} as done on day ${dayId}`);
          dayToUpdate.isDone = false;
        }
      }
    },
    // MARK DEFAULT ACTION
    markDefault: (state, action) => {
      const { habbitId, dayId } = action.payload;
      const habitToUpdate = state.habbits.find(
        (habbit) => habbit._id === habbitId
      );
      if (habitToUpdate) {
        const dayToUpdate = habitToUpdate.weekData.find(
          (day) => day.id === dayId
        );
        if (dayToUpdate) {
          console.log(`Marking habit ${habbitId} as done on day ${dayId}`);
          dayToUpdate.isDone = null;
        }
      }
    },
  },
});

export const habbitReducer = habbitSlice.reducer;

export const habbitActions = habbitSlice.actions;

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Error saving state to local storage:", error);
  }
};

export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined; // If no state found in local storage, return undefined to let Redux use the initial state.
      }
      return JSON.parse(serializedState);
    } catch (error) {
      // Handle errors here, if necessary
      console.error("Error loading state from local storage:", error);
      return undefined;
    }
  };

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
