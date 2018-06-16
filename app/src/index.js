require("styles/main.scss")

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import store from "./store.js"
import BabysitterCalculator from "./containers/BabysitterCalculator.js"

let mount = document.createElement("div")
mount.id = "mount"
document.body.appendChild(mount)

ReactDOM.render(
    <Provider store={store}>
        <BabysitterCalculator />
    </Provider>,
    mount
)
