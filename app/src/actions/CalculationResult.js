export const SET_RESULT = "SET_RESULT"

export const setCalculationResult = result => {
    return {
        type: SET_RESULT,
        payload: result
    }
}
