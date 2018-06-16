import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import autobind from "autobind-decorator"

import TimePicker from "components/TimePicker.js"

import { Button } from "react-bootstrap"
import { setStartTime, setBedTime, setEndTime } from "actions/BabysitterCalculator.js"
import { setCalculationResult } from "actions/CalculationResult.js"

import { isStartTimeValid, isBedTimeValid, isEndTimeValid } from "util/Time.js"
import { calculateResult } from "util/Calculator.js"

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
    @autobind
    onStartTimeChanged(value) {
        this.props.setStartTime(value)
    }

    @autobind
    onBedTimeChanged(value) {
        this.props.setBedTime(value)
    }

    @autobind
    onEndTimeChanged(value) {
        this.props.setEndTime(value)
    }

    @autobind
    performCalculation() {
        let start = this.props.babysitterCalculator.startTime
        let bed = this.props.babysitterCalculator.bedTime
        let end = this.props.babysitterCalculator.endTime

        let result = calculateResult(start, bed, end)

        console.log(`Setting calculation result to ${result}`)
        this.props.setCalculationResult(result)
    }

    render() {
        let start = this.props.babysitterCalculator.startTime
        let bed = this.props.babysitterCalculator.bedTime
        let end = this.props.babysitterCalculator.endTime

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
                <Button bsStyle="primary" bsSize="large" disabled={calculateButtonDisabled} onClick={this.performCalculation}>
                    Calculate
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        babysitterCalculator: state.babysitterCalculator
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            setStartTime,
            setBedTime,
            setEndTime,

            setCalculationResult
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BabysitterCalculator)
