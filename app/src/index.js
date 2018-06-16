require("styles/main.scss")

import React from "react"
import ReactDOM from "react-dom"
import BabysitterCalculator from "./BabysitterCalculator.js"

let mount = document.createElement("div")
mount.id = "mount"
document.body.appendChild(mount)

ReactDOM.render(<BabysitterCalculator />, mount)
