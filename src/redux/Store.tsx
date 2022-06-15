import { createStore, applyMiddleware } from "redux";
import { initialState } from "./transReducer";
import {transReducer} from "./transReducer"; 
import thunk from 'redux-thunk';

export const Store = createStore(transReducer, initialState, applyMiddleware(thunk));

export type store = ReturnType<typeof transReducer>
