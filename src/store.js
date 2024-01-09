import { legacy_createStore } from "redux";
import { todoReducer } from "./To-do/reduce";
import { composeWithDevTools } from "redux-devtools-extension";



const store = legacy_createStore(todoReducer, composeWithDevTools())


export default store