import { GET_USERS_ASYNC } from './constants';

 const initialState = {
    isLoading: false
}

function userReducer(state = [], action){
    console.log('this is reducer---', action.payload);
    switch(action.type) {
        case GET_USERS_ASYNC:
           /*  return {
                ...state,
                userContent: action.payload,
            }  */
            return action.payload
        default:
            return state;
    }
     
}

export default userReducer;

