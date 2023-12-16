import { combineReducers } from "redux";
import authReducer from "./auth";
import pitchReducer from "./pitch";

export default combineReducers({
  auth: authReducer,
  pitch: pitchReducer
});