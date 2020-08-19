import { FETCH_USER_SUCCESS } from "../constants"

const initialState = {
    user: {}
}

const user = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_USER_SUCCESS:
            // 三大原则之一，state是只读的，不能直接改变
            return {
                user: action.user
            };
        default:
             return state;
    }
}

export default user;