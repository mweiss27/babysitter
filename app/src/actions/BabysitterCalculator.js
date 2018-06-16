export const SET_START_TIME = "SET_START_TIME"
export const SET_BED_TIME = "SET_BED_TIME"
export const SET_END_TIME = "SET_END_TIME"

export const setStartTime = time => {
    return {
        type: SET_START_TIME,
        payload: time
    }
}

export const setBedTime = time => {
    return {
        type: SET_BED_TIME,
        payload: time
    }
}

export const setEndTime = time => {
    return {
        type: SET_END_TIME,
        payload: time
    }
}
