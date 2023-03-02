import { configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import navReducer from "./reducers/navReducer";

const reducer = combineReducers({
    menu: navReducer,
})

export const store = configureStore({reducer}, applyMiddleware(thunk));