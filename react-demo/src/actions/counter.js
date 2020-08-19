import * as actions from "../constants"

// export function increment(num){
//     return {
//         type: actions.INCREMENT,
//         num: num
//     }
// }

export function increment(num){
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actions.INCREMENT,
                num: num
            })
        },1000)
    }
}

export function decrement(num){
    return {
        type: actions.DECREMENT,
        num: num
    }
}