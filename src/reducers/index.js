import { combineReducers } from "redux";
import navigation from './navigation';
import authReducer from "./authReducer.js";

export default combineReducers({
auth:authReducer,
navigation
});
