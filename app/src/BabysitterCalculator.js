import React, { Component } from "react"
import TimePicker from "./components/TimePicker.js"
import autobind from "autobind-decorator"

import { Button } from "react-bootstrap"
import { toMoment, isStartTimeValid, isBedTimeValid, isEndTimeValid } from "util/Time.js"

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
        let start = this.state.startTime
        let bed = this.state.bedTime
        let end = this.state.endTime

        let isStartValid = isStartTimeValid(start, bed, end)
        let isBedValid = isBedTimeValid(start, bed, end)
        let isEndValid = isEndTimeValid(start, bed, end)

        console.log(isStartValid, isBedValid, isEndValid)

        let calculateButtonDisabled = !isStartValid || !isBedValid || !isEndValid

        return (
            <div id="babysitter-calculator">
                <h2>Babysitter Calculator</h2>
                <div id="babysitter-timepickers">
                    <TimePicker label="Start Time" value={start} valid={isStartValid} onChange={this.onStartTimeChanged} />
                    <TimePicker label="Bed Time" value={bed} valid={isBedValid} onChange={this.onBedTimeChanged} />
                    <TimePicker label="End Time" value={end} valid={isEndValid} onChange={this.onEndTimeChanged} />
                </div>
                <Button bsStyle="primary" bsSize="large" disabled={calculateButtonDisabled}>
                    Calculate
                </Button>
            </div>
        )
    }
}
export default BabysitterCalculator
