import { createStore } from 'redux';
import { habbitReducer } from './redux/reducers/reducers';



export const store = createStore(habbitReducer);
