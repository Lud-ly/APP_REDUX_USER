import {USER_SELECTED} from '../actions/index'
export default function(state = null,action){
    console.log(state)
    switch(action.type){
        case USER_SELECTED :
            return action.payload;
    }
    return state
}