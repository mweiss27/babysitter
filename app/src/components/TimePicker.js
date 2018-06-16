import React, { Component } from "react"
import autobind from "autobind-decorator"
import TimePicker from "react-times"
import moment from "moment"

import { toString, toMoment } from "util/Time.js"

import "styles/timepicker.scss"
import "react-times/css/material/default.css"

/**
 * TimeInputField consolidates:
 *  A graphical input for selecting a time
 *  A field to view or manually enter a time
 */
class TimeInputField extends Component {
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
        console.log(`[TimePicker.js - onMeridiemChanged] `, value, this.state.time.hour())
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
