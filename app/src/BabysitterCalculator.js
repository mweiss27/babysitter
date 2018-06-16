import React, { Component } from "react"
import TimePicker from "./components/TimePicker.js"
import autobind from "autobind-decorator"

import { Button } from "react-bootstrap"
import { toMoment } from "util/Time.js"

import "styles/babysittercalculator.scss"
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
        bedTime: toMoment("9:00PM"),
        endTime: toMoment("12:00AM")
    }

    @autobind
    onStartTimeChanged(value) {
        this.setState({
            startTime: value
        })
    }

    @autobind
    onBedTimeChanged(value) {
        this.setState({
            bedTime: value
        })
    }

    @autobind
    onEndTimeChanged(value) {
        this.setState({
            endTime: value
        })
    }

    render() {
        return (
            <div id="babysitter-calculator">
                <h2>Babysitter Calculator</h2>
                <div id="babysitter-timepickers">
                    <TimePicker label="Start Time" value={this.state.startTime} onChange={this.onStartTimeChanged} />
                    <TimePicker label="Bed Time" value={this.state.bedTime} onChange={this.onBedTimeChanged} />
                    <TimePicker label="End Time" value={this.state.endTime} onChange={this.onEndTimeChanged} />
                </div>
                <Button bsStyle="primary" bsSize="large">
                    Calculate
                </Button>
            </div>
        )
    }
}
export default BabysitterCalculator
