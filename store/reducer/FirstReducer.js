import { DECREASE, INCREASE } from "../actions";

export const FirstReducer = (state, action) => {
    console.log(state, action.type)
    switch (action.type) {
        case INCREASE:
            let newState = { ...state }
            newState.value = newState.value + action.payload
            return newState
            break
        case DECREASE:
            let subState = { ...state }
            subState.value = subState.value - action.payload
            return subState
            break
        default:
            return state
    }
}