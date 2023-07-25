import { ADD_HABBIT, DELETE_HABBIT, TOGGLE_HABIT } from "../action/actions";

const initialState = [
    {
        text: 'This is New Habbit',
        date: [
            {
                date: new Date(),
                completed: true
            }
        ]
    },
];

export function habbitReducer(state = initialState, action){
    switch(action.type){
        case ADD_HABBIT:
            return state;
        case DELETE_HABBIT:
            return state;
        case TOGGLE_HABIT:
            return state;
        default:
            return state;
    }

}