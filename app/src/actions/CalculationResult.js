export const SET_CALCULATION_RESULT = "SET_CALCULATION_RESULT"

export const setCalculationResult = result => {
    return {
        type: SET_CALCULATION_RESULT,
        payload: result
    }
}
