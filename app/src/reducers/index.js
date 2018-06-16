import { combineReducers } from "redux"

import babysitterCalculator from "./BabysitterCalculator.js"
import calculationResult from "./CalculationResult.js"

export default combineReducers({
    babysitterCalculator,
    calculationResult
})
