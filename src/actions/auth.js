import {
  SET_USER,
} from "./types";

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_USER,
    payload: decoded
  };
};
// Log user out
export const logoutUser = () => {
  return {
    type: SET_USER,
    payload: {}
  }
};