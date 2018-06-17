import moment from "moment"
import { assert } from "chai"

import { toMoment } from "util/Time.js"
import { calculateResult } from "util/Calculator.js"

describe("Calculator", () => {
    describe("Calculator.calculateResult", () => {
        it("Should return 0 for no input", () => {
            let result = calculateResult()

            assert.equal(result, 0)
        })

        it("Should return 0 for invalid input", () => {
            let result = calculateResult(1, 2, 3)

            assert.equal(result, 0)
        })

        it("Should return 0 for invalid moment inputs", () => {
            let result = calculateResult(toMoment("6:00PM", moment(null), toMoment("12:30AM")))

            assert.equal(result, 0)
        })

        it("Should return 40", () => {
            let start = toMoment("5:00PM")
            let bed = toMoment("7:00PM")
            let end = toMoment("9:00PM")

            let result = calculateResult(start, bed, end)

            assert.equal(result, 40)
        })

        it("Should return 84", () => {
            let start = toMoment("5:30PM")
            let bed = toMoment("9:45PM")
            let end = toMoment("12:30AM")

            let result = calculateResult(start, bed, end)

            assert.equal(result, 84)
        })

        it("Should return 116", () => {
            let start = toMoment("5:15PM")
            let bed = toMoment("10:00PM")
            let end = toMoment("2:30AM")

            let result = calculateResult(start, bed, end)

            assert.equal(result, 116)
        })
    })
})
