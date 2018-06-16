import React, { Component } from "react"
import TimePicker from "./components/TimePicker.js"
import autobind from "autobind-decorator"

import { toMoment } from "util/Time.js"

/**
 * The main component of the application
 * The calculator houses the time pickers for:
 *      Start time
 *      Bed time
 *      End time
 *
 * As well as a button to trigger the calculation and a section to display the result
 */
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
