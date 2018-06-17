import { SET_ERRORS } from "actions/ErrorMessages.js"

const initialState = {
    errors: []
}

export default function(state = initialState, action) {
    let nextState

    switch (action.type) {
        case SET_ERRORS: {
            nextState = {
                ...state,
                errors: action.payload.filter(e => e != null)
            }

            break
        }

        default: {
            nextState = state
        }
    }

    return nextState
}
