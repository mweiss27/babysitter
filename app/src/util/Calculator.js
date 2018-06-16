import moment from "moment"
import { toMoment } from "util/Time.js"

const RATES = {
    START_TO_BED: 12,
    BED_TO_MIDNIGHT: 8,
    MIDNIGHT_TO_END: 16
}

const __momentConstructor = moment().constructor

/**
 * Step through the night from start to finish
 * Split the hour's work into any applicable categories
 * Increment result by the highest hourly rate for that hour
 */
export const calculateResult = (start, bed, end) => {
    if (!start || !bed || !end) return 0
    if (start.constructor !== __momentConstructor || bed.constructor !== __momentConstructor || end.constructor !== __momentConstructor)
        return 0
    if (!start.isValid() || !bed.isValid() || !end.isValid()) return 0

    let current = start
    let midnight = toMoment("12:00AM")

    let result = 0
    while (current.isBefore(end)) {
        let hourEnd = moment(current)
            .add(1, "hour")
            .subtract(1, "second")

        // We didn't reach the full hour, so they will not be paid for this hour
        if (hourEnd.isAfter(end)) break

        let applicableRates = [0]
        if (current.isBefore(bed)) applicableRates.push(RATES.START_TO_BED)
        else applicableRates.push(RATES.BED_TO_MIDNIGHT)

        if (hourEnd.isAfter(midnight)) applicableRates.push(RATES.MIDNIGHT_TO_END)

        let billForHour = Math.max(...applicableRates)
        result += billForHour

        current = hourEnd.add(1, "second")
    }

    return result
}
