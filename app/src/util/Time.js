import moment from "moment"

const TIME_FORMAT = "HH:mmA"

/**
 * Converts a string in HH:mmA format to a moment object with zero'd seconds
 */
export const toMoment = s => {
    if (!s)
        return moment()
            .year(0)
            .month(0)
            .date(2)
            .hour(0)
            .minute(0)
            .second(0)

    if (s.constructor !== String) return moment(null) //null is invalid, undefined is the current time

    let date = 1
    if (s.endsWith("AM")) date = 2 // It's the next day

    return moment(s, TIME_FORMAT)
        .year(0)
        .month(0)
        .date(date)
        .second(0)
}

/**
 * Converts a moment object into a string, formatted as HH:mmA
 */
export const toString = m => {
    const defaultReturn = "12:00AM"
    if (!m) return defaultReturn
    if (m.constructor !== moment().constructor) return defaultReturn

    try {
        return m.format(TIME_FORMAT)
    } catch (ex) {
        return defaultReturn
    }
}

/**
 * The babysitter can start no earlier than 5:00PM
 */
export const isStartTimeValid = (start, bed, end) => {
    let earliestStartTime = toMoment("5:00PM")
    let latestStartTime = toMoment("3:59AM")

    if (start.isBefore(earliestStartTime)) return false
    if (start.isAfter(latestStartTime)) return false

    return true
}

export const isBedTimeValid = (start, bed, end) => {
    return true // They can go to bed whenever they want, really
}

/**
 * The babysitter can stay no later than 4:00AM
 */
export const isEndTimeValid = (start, bed, end) => {
    // Can't end before you start
    if (end.isBefore(start)) return false
    let earliestEndTime = toMoment("5:01PM")
    let latestEndTime = toMoment("4:00AM")

    if (end.isBefore(earliestEndTime)) return false
    if (end.isAfter(latestEndTime)) return false

    return true
}
