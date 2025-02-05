import { combineReducers, createStore } from "redux";

//Reducer imports
import todoReducer from "./Reducers/todoReducer"; 

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;