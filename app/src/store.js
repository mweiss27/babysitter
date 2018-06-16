import { createStore } from "redux"

import rootReducer from "./reducers"

let initialState = {}

export default createStore(rootReducer, initialState)
