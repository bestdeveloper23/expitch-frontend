import {
    SET_EMAIL,
    SET_FILE,
    SET_PITCHES,
} from "./types";

export const setEmail = (email) => ({
 type: SET_EMAIL,
 payload: email,
});

export const setFile = (file) => ({
 type: SET_FILE,
 payload: file,
});

export const setPitchesList = (pitchesList) => ({
    type: SET_PITCHES,
    payload: pitchesList,
})