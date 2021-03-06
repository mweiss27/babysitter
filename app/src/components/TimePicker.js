import React, { Component, PropTypes } from "react"
import autobind from "autobind-decorator"
import TimePicker from "react-times"
import MomentPropTypes from "react-moment-proptypes"

import { toString } from "util/Time.js"

import "styles/timepicker.scss"
import "react-times/css/material/default.css"

/**
 * TimeInputField consolidates:
 *  A graphical input for selecting a time
 *  A field to view or manually enter a time
 */
class TimeInputField extends Component {
    static propTypes = {
        label: PropTypes.string,
        value: MomentPropTypes.momentObj,
        valid: PropTypes.bool,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            time: props.value,
            focused: false
        }
    }

    @autobind
    triggerOnChange() {
        this.props.onChange && this.props.onChange(this.state.time)
    }

    @autobind
    onHourChanged(value) {
        let previousHour = this.state.time.hour()
        let nextHour = parseInt(value)
        // If we were previously in the PM, whatever time we select should stay in the PM range
        if (previousHour >= 12) nextHour += 12
        // console.log(`onHourchanged`, previousHour, nextHour)
        let nextTime = this.state.time.hour(nextHour)

        this.setState(
            {
                time: nextTime,
                focused: true
            },
            this.triggerOnChange
        )
    }

    @autobind
    onMinuteChanged(value) {
        let nextMinute = parseInt(value)
        let nextTime = this.state.time.minute(nextMinute)

        this.setState(
            {
                time: nextTime,
                focused: true
            },
            this.triggerOnChange
        )
    }

    @autobind
    onMeridiemChanged(value) {
        // We need to adjust our hour based on whether we are AM or PM
        // Moment uses 24-hour when using .hour()
        let hour = this.state.time.hour()
        // console.log(`onMeridiemChanged - ${value} `, hour)
        switch (value.toLowerCase()) {
            case "am":
                if (hour >= 12) hour -= 12
                break
            case "pm":
                if (hour < 12) hour += 12
                break
        }

        let nextDate
        if (this.state.time.date() === 1) nextDate = 2
        else nextDate = 1
        let nextTime = this.state.time.hour(hour).date(nextDate)

        this.setState(
            {
                time: nextTime,
                focused: true
            },
            this.triggerOnChange
        )
    }

    @autobind
    onFocusChange(focusStatue) {
        this.setState({
            focused: focusStatue
        })
    }

    render() {
        let className = "timepicker"
        if (!this.props.valid) className += " invalid"

        return (
            <div className={className}>
                <div className="timepicker-label">{this.props.label}</div>
                <TimePicker
                    focused={this.state.focused}
                    onHourChange={this.onHourChanged}
                    onMinuteChange={this.onMinuteChanged}
                    onMeridiemChange={this.onMeridiemChanged}
                    onFocusChange={this.onFocusChange}
                    time={toString(this.state.time)}
                    timeMode="12"
                    draggable={false}
                />
            </div>
        )
    }
}

export default TimeInputField
