import { GET_USERS_ASYNC } from './constants';

function userReducer(state = [], action){
    switch(action.type) {

        case GET_USERS_ASYNC:
        console.log("user get data---------------",action.payload)
        return action.payload; 
    }
     return state;
}

export default userReducer