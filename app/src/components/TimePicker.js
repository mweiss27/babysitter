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
        let nextTime = this.state.time.hour(value)

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
        let nextTime = this.state.time.minute(value)

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
        switch (value.toLowerCase()) {
            case "am":
                if (hour > 12) hour -= 12
                break
            case "pm":
                if (hour < 12) hour += 12
                break
        }

        let nextTime = this.state.time.hour(hour)

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
        return (
            <div className="timepicker">
                <div className="timepicker-label">{this.props.label}</div>
                <TimePicker
                    focused={this.state.focused}
                    onHourChange={this.onHourChanged}
                    onMinuteChange={this.onMinuteChanged}
                    onMeridiemChange={this.onMeridiemChanged}
                    onFocusChange={this.onFocusChange}
                    time={toString(this.state.time)}
                    timeMode="12"
                />
            </div>
        )
    }
}

export default TimeInputField
