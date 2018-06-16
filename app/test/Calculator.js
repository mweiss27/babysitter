const Time = require("util/Time.js")
const Calculator = require("util/Calculator.js")

const assert = require("chai").assert
const moment = require("moment")

describe("Calculator", () => {
    describe("Calculator.calculateResult", () => {
        it("Should return 0 for no input", () => {
            let result = Calculator.calculateResult()

            assert.equal(result, 0)
        })

        it("Should return 0 for invalid input", () => {
            let result = Calculator.calculateResult(1, 2, 3)

            assert.equal(result, 0)
        })

        it("Should return 0 for invalid moment inputs", () => {
            let result = Calculator.calculateResult(Time.toMoment("6:00PM", moment(null), Time.toMoment("12:30AM")))

            assert.equal(result, 0)
        })

        it("Should return 40", () => {
            let start = Time.toMoment("5:00PM")
            let bed = Time.toMoment("7:00PM")
            let end = Time.toMoment("9:00PM")

            let result = Calculator.calculateResult(start, bed, end)

            assert.equal(result, 40)
        })

        it("Should return 84", () => {
            let start = Time.toMoment("5:30PM")
            let bed = Time.toMoment("9:45PM")
            let end = Time.toMoment("12:30AM")

            let result = Calculator.calculateResult(start, bed, end)

            assert.equal(result, 84)
        })

        it("Should return 116", () => {
            let start = Time.toMoment("5:15PM")
            let bed = Time.toMoment("10:00PM")
            let end = Time.toMoment("2:30AM")

            let result = Calculator.calculateResult(start, bed, end)

            assert.equal(result, 116)
        })

        it("Should return ")
    })
})
