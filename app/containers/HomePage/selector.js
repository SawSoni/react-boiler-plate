import { createSelector } from 'reselect';
import Dottie from 'dottie';

import { GET_USERS, GET_USERS_ASYNC } from "./constants";

export function getUsers() {
    return { type: GET_USERS}
}

export function getUserAsyc(payload){
    return { type: GET_USERS_ASYNC, payload}
} 

// const getUserFlowReducers = (state) => Dottie.get(state, '')