import { createContext, useReducer } from "react";
import { DECREASE, INCREASE } from "../actions";
import { FirstReducer } from "../reducer/FirstReducer";

export const FirstContext = createContext()

const FirstContextProvider = (props) => {
    const [state, dispatch] = useReducer(FirstReducer, { value: 0 })

    const addValue = () => {
        dispatch({ type: INCREASE, payload: 10 })
    }

    const subValue = () => {
        dispatch({ type: DECREASE, payload: 10 })
    }
    return (
        <FirstContext.Provider
            value={{ state, addValue, subValue }}
        >
            {props.children}
        </FirstContext.Provider>
    )

}
export default FirstContextProvider