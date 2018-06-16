import React, { Component } from "react"
import TimePicker from "./components/TimePicker.js"
import autobind from "autobind-decorator"

import { toString, toMoment } from "util/Time.js"

class BabysitterCalculator extends Component {
    state = {
        startTime: toMoment("5:30PM"),
        endTime: toMoment("11:59PM")
    }

    @autobind
    onStartTimeChanged(value) {
        this.setState({
            startTime: value
        })
    }

    render() {
        return (
            <div id="babysitter-calculator">
                <TimePicker value={this.state.startTime} onChange={this.onStartTimeChanged} />
            </div>
        )
    }
}
export default BabysitterCalculator
