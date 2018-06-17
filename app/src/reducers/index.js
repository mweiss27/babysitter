import { combineReducers } from "redux"

import babysitterCalculator from "./BabysitterCalculator.js"
import errors from "./ErrorMessages.js"
import calculationResult from "./CalculationResult.js"

export default combineReducers({
    babysitterCalculator,
    errors,
    calculationResult
})
