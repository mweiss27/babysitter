import { SET_START_TIME, SET_BED_TIME, SET_END_TIME } from "actions/BabysitterCalculator.js"
import { toMoment } from "util/Time.js"

const initialState = {
    startTime: toMoment("5:30PM"),
    bedTime: toMoment("9:00PM"),
    endTime: toMoment("12:00AM")
}

export default function(state = initialState, action) {
    let nextState

    switch (action.type) {
        case SET_START_TIME: {
            nextState = {
                ...state,
                startTime: action.payload
            }
            break
        }
        case SET_BED_TIME: {
            nextState = {
                ...state,
                bedTime: action.payload
            }
            break
        }
        case SET_END_TIME: {
            nextState = {
                ...state,
                endTime: action.payload
            }
            break
        }

        default: {
            nextState = state
        }
    }

    return nextState
}
