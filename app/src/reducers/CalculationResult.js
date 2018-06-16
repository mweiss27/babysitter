import { SET_RESULT } from "actions/CalculationResult.js"

const initialState = {
    result: 0
}

export default function(state = initialState, action) {
    let nextState

    switch (action.type) {
        case SET_RESULT: {
            nextState = {
                ...state,
                result: action.payload
            }

            break
        }

        default: {
            nextState = state
        }
    }

    return nextState
}
