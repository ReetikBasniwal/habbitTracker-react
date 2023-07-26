// import { ADD_HABBIT, DELETE_HABBIT, TOGGLE_HABIT, toggleHabbit } from "../action/actions";
import { createSlice } from "@reduxjs/toolkit";
let id = 1;

const initialState = {
    habbits: [],
};

const habbitSlice = createSlice({
    name: 'habbit',
    initialState,
    reducers: {
         // this is ADD ACTION
         addHabbit: (state, action) => {
            const today = new Date();
            const sundayDate = today.getDate() - today.getDay();
            const month = today.getMonth();
            const year = today.getFullYear();
            const habbit = {
                _id : id++,
                text: action.payload,
                weekData: [
                    {
                        id: 0,
                        day: 'Sunday',
                        dd: sundayDate,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 1,
                        day: 'Monday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 2,
                        day: 'Tuesday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 3,
                        day: 'Wednesday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 4,
                        day: 'Thursday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 5,
                        day: 'Friday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                    {
                        id: 6,
                        day: 'Saturday',
                        dd: sundayDate+1,
                        mm: month,
                        year: year,
                        isDone: "",
                    },
                ]
            }
            state.habbits.push(habbit);
         },
         // this is TOGGLE ACTION
        //  habbitCompleted: (state, action) => {
        //     state.habbits.map((habbit) => {
        //         if(habbit.weekData._id === action.payload){

        //         }
        //     })
        //  },

         // this is DELECTE ACTION
    }
})

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