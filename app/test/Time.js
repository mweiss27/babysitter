import moment from "moment"
import { assert } from "chai"

import { toMoment, toString, getStartTimeError, getBedTimeError, getEndTimeError } from "util/Time.js"
import Constants from "util/Constants.js"

describe("Time", () => {
    describe("Time.toMoment", () => {
        it("toMoment should return 12:00AM as a moment object if no input is given", () => {
            let result = toMoment()

            assert.equal(result.hour(), 0)
            assert.equal(result.minute(), 0)
            assert.equal(result.second(), 0)
        })

        it("toMoment should return a moment object if no input is given", () => {
            let result = toMoment()

            assert.isObject(result)
            assert.equal(result.constructor, moment().constructor)
        })

        it("toMoment should return a moment object if input is given", () => {
            let result = toMoment("5:30PM")

            assert.isObject(result)
            assert.equal(result.constructor, moment().constructor)
        })

        it("toMoment should return a moment object with hours and minutes that respect AM/PM", () => {
            let result = toMoment("4:30AM")
            let result2 = toMoment("5:15PM")

            assert.equal(result.hour(), 4)
            assert.equal(result.minute(), 30)

            assert.equal(result2.hour(), 17)
            assert.equal(result2.minute(), 15)
        })

        it("toMoment should strip the seconds of its input", () => {
            let result = toMoment("5:30PM")

            assert.equal(result.second(), 0)
        })

        it("toMoment should return an invalid moment object for non-string input", () => {
            let result = toMoment(10)
            let result2 = toMoment({})

            assert(!result.isValid())
            assert(!result2.isValid())
        })
    })

    describe("Time.toString", () => {
        it("toString should return 12:00AM if no input is given", () => {
            let result = toString()

            assert.equal(result, "12:00AM")
        })

        it("toString should return a string in HH:mmA format if given a moment object", () => {
            let obj = moment()
            let result = toString(obj)

            assert(/[01]?[0-9]:[0-5][0-9][AP]M/.test(result))
        })

        it("toString should return 12:00AM if invalid input is given", () => {
            let result = toString(50)
            let result2 = toString(null)

            assert.equal(result, "12:00AM")
            assert.equal(result2, "12:00AM")
        })
    })

    describe("Time.getStartTimeError", () => {
        it("5:00PM is valid", () => {
            let m = toMoment("5:00PM")

            assert.equal(getStartTimeError(m), undefined)
        })

        it("4:59PM is invalid", () => {
            let m = toMoment("4:59PM")

            assert.equal(getStartTimeError(m), Constants.CANNOT_START_BEFORE_5)
        })

        it("4:00AM is invalid", () => {
            let m = toMoment("4:00AM")

            assert.equal(getStartTimeError(m), Constants.CANNOT_START_AFTER_359)
        })

        it("3:59AM is valid", () => {
            let m = toMoment("3:59AM")

            assert.equal(getStartTimeError(m), undefined)
        })
    })

    describe("Time.getBedTimeError", () => {
        it("Should return undefined", () => {
            assert.equal(getBedTimeError(), undefined)
        })
    })

    describe("Time.getEndTimeError", () => {
        it("4:00AM is valid", () => {
            let start = toMoment("5:00PM")
            let end = toMoment("4:00AM")

            assert.equal(getEndTimeError(start, null, end), undefined)
        })

        it("4:01AM is invalid", () => {
            let start = toMoment("5:00PM")
            let end = toMoment("4:01AM")

            let result = getEndTimeError(start, null, end)
            assert.equal(result, Constants.CANNOT_END_AFTER_4)
        })

        it("5:00PM is invalid", () => {
            let start = toMoment("5:00PM")
            let end = toMoment("5:00PM")

            assert.equal(getEndTimeError(start, null, end), Constants.CANNOT_END_BEFORE_501)
        })

        it("5:01PM is valid", () => {
            let start = toMoment("5:00PM")
            let end = toMoment("5:01PM")

            assert.equal(getEndTimeError(start, null, end), undefined)
        })

        it("Any time before the start time is invalid", () => {
            let start = toMoment("10:30PM")
            let end = toMoment("10:00PM")

            let start2 = toMoment("12:30AM")
            let end2 = toMoment("11:30PM")

            assert.equal(getEndTimeError(start, null, end), Constants.CANNOT_END_BEFORE_START)
            assert.equal(getEndTimeError(start2, null, end2), Constants.CANNOT_END_BEFORE_START)
        })
    })
})
