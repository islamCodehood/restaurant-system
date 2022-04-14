import { combineReducers } from "redux";
import menuItems from "./menuItems.reducer";
import orders from "./orders.reducer";


export const reducers = combineReducers({ menuItems,  orders});