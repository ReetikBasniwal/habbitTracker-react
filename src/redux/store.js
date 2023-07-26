import { configureStore } from "@reduxjs/toolkit";
import { habbitReducer } from './reducers/reducers';



export const store = configureStore({
    reducer: {
        habbitReducer,
    }
})
