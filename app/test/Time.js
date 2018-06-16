const moment = require("moment")
const Time = require("../src/util/Time.js")
const assert = require("chai").assert

describe("Time", () => {
    describe("Time.toMoment", () => {
        it("toMoment should return 12:00AM as a moment object if no input is given", () => {
            let result = Time.toMoment()

            assert.equal(result.hour(), 0)
            assert.equal(result.minute(), 0)
            assert.equal(result.second(), 0)
        })

        it("toMoment should return a moment object if no input is given", () => {
            let result = Time.toMoment()

            assert.isObject(result)
            assert.equal(result.constructor, moment().constructor)
        })

        it("toMoment should return a moment object if input is given", () => {
            let result = Time.toMoment("5:30PM")

            assert.isObject(result)
            assert.equal(result.constructor, moment().constructor)
        })

        it("toMoment should return a moment object with hours and minutes that respect AM/PM", () => {
            let result = Time.toMoment("4:30AM")
            let result2 = Time.toMoment("5:15PM")

            assert.equal(result.hour(), 4)
            assert.equal(result.minute(), 30)

            assert.equal(result2.hour(), 17)
            assert.equal(result2.minute(), 15)
        })

        it("toMoment should strip the seconds of its input", () => {
            let result = Time.toMoment("5:30PM")

            assert.equal(result.second(), 0)
        })

        it("toMoment should return an invalid moment object for non-string input", () => {
            let result = Time.toMoment(10)
            let result2 = Time.toMoment({})

            assert(!result.isValid())
            assert(!result2.isValid())
        })
    })

    describe("Time.toString", () => {
        it("toString should return 12:00AM if no input is given", () => {
            let result = Time.toString()

            assert.equal(result, "12:00AM")
        })

        it("toString should return a string in HH:mmA format if given a moment object", () => {
            let obj = moment()
            let result = Time.toString(obj)

            assert(/[01]?[0-9]:[0-5][0-9][AP]M/.test(result))
        })

        it("toString should return 12:00AM if invalid input is given", () => {
            let result = Time.toString(50)
            let result2 = Time.toString(null)

            assert.equal(result, "12:00AM")
            assert.equal(result2, "12:00AM")
        })
    })
})
