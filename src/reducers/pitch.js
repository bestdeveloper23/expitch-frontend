import { SET_EMAIL, SET_FILE, SET_PITCHES } from "../actions/types";

const initialState = {
  email: "",
  file: null,
  pitchesList: [],
};

const pitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case SET_PITCHES:
      return {
        ...state,
        pitchesList: action.payload,
      };
    default:
      return state;
  }
};

export default pitchReducer;
